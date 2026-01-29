import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Project as ProjectType } from "@/app/types";
import { ProjectTechnologies } from "./ProjectTechnologies";

interface ProjectModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = project
    ? Array.from(new Set([project.imageUrl, ...(project.galleryImages || [])]))
    : [];

  useEffect(() => {
    if (project?.imageUrl) {
      setSelectedImage(project.imageUrl);
    }
  }, [project]);

  const handleImageNavigation = useCallback((direction: 'next' | 'prev') => {
    if (galleryImages.length <= 1 || !selectedImage) return;

    const currentIndex = galleryImages.indexOf(selectedImage);
    let nextIndex;

    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      nextIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    setSelectedImage(galleryImages[nextIndex]);
  }, [galleryImages, selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'ArrowRight') handleImageNavigation('next');
      else if (e.key === 'ArrowLeft') handleImageNavigation('prev');
      else if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, handleImageNavigation, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] p-8 mx-4 overflow-y-auto rounded-xl bg-card border border-border shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold mb-4 text-primary">{project.title}</h2>

            {/* Image Gallery */}
            <div className="mb-6 space-y-4">
              <div className="relative group w-full overflow-hidden rounded-lg aspect-video bg-muted border">
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt={`Vista previa de ${project.title}`}
                    fill
                    className="object-contain"
                  />
                )}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={() => handleImageNavigation('prev')}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-black/50 transition-all focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => handleImageNavigation('next')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-black/50 transition-all focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
              {galleryImages.length > 1 && (
                <div className="flex gap-2 pb-2 -mx-8 px-8 overflow-x-auto">
                  {galleryImages.map((imgUrl) => (
                    <button
                      key={imgUrl}
                      onClick={() => setSelectedImage(imgUrl)}
                      className={`relative w-24 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                        selectedImage === imgUrl ? 'border-primary scale-105' : 'border-transparent hover:border-primary/50'
                      }`}
                    >
                      <Image src={imgUrl} alt={`Miniatura de ${project.title}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground whitespace-pre-line">{project.fullDescription}</p>
              <ProjectTechnologies technologies={project.technologies} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}