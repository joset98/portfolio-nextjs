"use client"

import { X, ChevronLeft, ChevronRight, Github } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { Project as ProjectType } from "@/app/types";
import { useLang } from "@/app/i18n";
import { repoLinks } from "./Projects";

interface ProjectModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, projects } = useLang();
  // Re-read from the localized list so the modal follows the language switch.
  const p = project ? projects.find((x) => x.id === project.id) ?? project : null;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const galleryImages = p ? Array.from(new Set([p.imageUrl, ...(p.galleryImages || [])])) : [];

  // Native modal dialog: the browser keeps focus inside, closes on Escape and returns focus to the opener on close().
  useEffect(() => {
    const d = dialogRef.current;
    if (p?.imageUrl) setSelectedImage(p.imageUrl);
    if (p && !d?.open) d?.showModal();
    else if (!p && d?.open) d.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p?.id]);

  const handleImageNavigation = useCallback((direction: 'next' | 'prev') => {
    if (galleryImages.length <= 1 || !selectedImage) return;
    const i = galleryImages.indexOf(selectedImage);
    const n = direction === 'next' ? (i + 1) % galleryImages.length : (i - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[n]);
  }, [galleryImages, selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!p) return;
      if (e.key === 'ArrowRight') handleImageNavigation('next');
      else if (e.key === 'ArrowLeft') handleImageNavigation('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [p, handleImageNavigation]);

  const index = selectedImage ? galleryImages.indexOf(selectedImage) + 1 : 1;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-title"
      // Escape closes the dialog natively; only sync the URL when it closed while a project was still open.
      onClose={() => { if (p) onClose(); }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="w-[calc(100%-1rem)] max-w-5xl max-h-[94vh] p-0 overflow-y-auto bg-background text-foreground border-2 border-foreground backdrop:bg-black/70 open:animate-in open:fade-in open:duration-200 sm:w-[calc(100%-3rem)]"
    >
      {p && (
          <div>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-5 py-4 border-b border-foreground bg-background sm:px-8">
              <h2 id="project-title" className="font-display text-2xl font-bold leading-tight sm:text-3xl">{p.title}</h2>
              <button onClick={onClose} className="p-2 -m-2 shrink-0 hover:opacity-70" aria-label={t.close}>
                <X size={24} />
              </button>
            </div>

            <div className="px-5 py-6 sm:px-8">
              <div className="relative w-full overflow-hidden border border-foreground aspect-video bg-paper2">
                {selectedImage && (
                  <Image src={selectedImage} alt={`${p.title} — ${index}/${galleryImages.length}`} fill sizes="(min-width: 1024px) 960px, 100vw" className="object-contain" />
                )}
              </div>
              {galleryImages.length > 1 && (
                <div className="flex items-center justify-between gap-4 py-3 border-b border-border">
                  <button onClick={() => handleImageNavigation('prev')} className="inline-flex items-center gap-1 label hover:underline" aria-label={t.prev}>
                    <ChevronLeft size={16} aria-hidden /> <span className="hidden sm:inline">{t.prev}</span>
                  </button>
                  <span className="label num text-muted-foreground">{index} / {galleryImages.length}</span>
                  <button onClick={() => handleImageNavigation('next')} className="inline-flex items-center gap-1 label hover:underline" aria-label={t.next}>
                    <span className="hidden sm:inline">{t.next}</span> <ChevronRight size={16} aria-hidden />
                  </button>
                </div>
              )}
              {galleryImages.length > 1 && (
                <div className="flex gap-2 py-3 overflow-x-auto">
                  {galleryImages.map((imgUrl, i) => (
                    <button
                      key={imgUrl}
                      onClick={() => setSelectedImage(imgUrl)}
                      aria-label={`${i + 1} / ${galleryImages.length}`}
                      aria-current={selectedImage === imgUrl}
                      className={`relative w-20 h-14 shrink-0 overflow-hidden border-2 ${selectedImage === imgUrl ? 'border-foreground' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <Image src={imgUrl} alt="" fill sizes="80px" className="object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}

              <div className="grid gap-8 mt-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                <div>
                  <h3 className="pb-2 mb-3 border-b-2 border-foreground label">{t.description}</h3>
                  <div className="max-w-[68ch] leading-relaxed">
                    {p.fullDescription.split(/\\n|\n/).map((line, i) =>
                      !line.trim() ? <div key={i} className="h-3" /> :
                      line.trim().endsWith(':') ? <h4 key={i} className="mt-4 mb-1 font-sans font-bold">{line}</h4> :
                      <p key={i} className="mb-1">{line}</p>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="pb-2 mb-3 border-b-2 border-foreground label">{t.technologies}</h3>
                  <ul className="font-sans text-sm">
                    {p.technologies.map((tech) => <li key={tech} className="py-1.5 border-b border-border">{tech}</li>)}
                  </ul>
                  <div className="flex flex-col gap-2 mt-6">
                    {repoLinks(p, t).map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-line">
                        <Github size={16} aria-hidden /> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
      )}
    </dialog>
  );
}
