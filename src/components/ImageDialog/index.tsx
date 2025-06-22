"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ImageViewerProps = {
  images?: string[];
  className?: string;
};

type ImageViewerDemoProps = {
  images: string[]; // 這邊明確指定為 string 陣列
};
type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, images, currentIndex, onIndexChange }) => {
  const [scale, setScale] = useState(1);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const resetTransform = () => {
    setScale(1);
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev * 1.5, 4));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev / 1.5, 0.5));
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      onIndexChange(currentIndex + 1);
      resetTransform();
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
      resetTransform();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      nextImage();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevImage();
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "+":
        case "=":
          zoomIn();
          break;
        case "-":
          zoomOut();
          break;
        case "0":
          resetTransform();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="absolute inset-0 flex items-center justify-center p-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                zoomOut();
              }}
              className="bg-background/80 backdrop-blur-sm"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                zoomIn();
              }}
              className="bg-background/80 backdrop-blur-sm"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                resetTransform();
              }}
              className="bg-background/80 backdrop-blur-sm"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" onClick={onClose} className="bg-background/80 backdrop-blur-sm">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          {currentIndex > 0 && (
            <Button
              variant="secondary"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="bg-background/80 absolute top-1/2 left-4 -translate-y-1/2 backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          {currentIndex < images.length - 1 && (
            <Button
              variant="secondary"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="bg-background/80 absolute top-1/2 right-4 -translate-y-1/2 backdrop-blur-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}

          {/* Image */}
          <motion.div
            style={{
              scale,
            }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full"
          >
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain select-none"
              draggable={false}
            />
          </motion.div>

          {/* Image counter */}
          <div className="bg-background/80 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-sm backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const ImageViewer: React.FC<ImageViewerProps> = ({ images = [], className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const defaultImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1418065460487-3956ef138dd4?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1464822759844-d150baec3d24?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&auto=format&fit=crop&q=60",
  ];

  const displayImages = images.length > 0 ? images : defaultImages;

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={cn("w-full", className)}>
        <div className="space-y-4 p-4">
          {Array.from({ length: Math.ceil(displayImages.length / 3) }, (_, rowIndex) => {
            const isOddRow = rowIndex % 2 === 0;
            const startIndex = rowIndex * 3;
            const rowImages = displayImages.slice(startIndex, startIndex + 3);

            return (
              <div key={rowIndex} className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {rowImages.map((image, colIndex) => {
                  const imageIndex = startIndex + colIndex;
                  let gridClass = "";

                  // PC版排列邏輯
                  if (isOddRow) {
                    // 奇數行：左1右2
                    if (colIndex === 0) gridClass = "md:col-span-1";
                    else if (colIndex === 1) gridClass = "md:col-span-1";
                    else gridClass = "md:col-span-1";
                  } else {
                    // 偶數行：左2右1
                    if (colIndex === 0) gridClass = "md:col-span-1";
                    else if (colIndex === 1) gridClass = "md:col-span-1";
                    else gridClass = "md:col-span-1";
                  }

                  return (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: imageIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "bg-muted relative aspect-square cursor-pointer overflow-hidden rounded-lg",
                        gridClass
                      )}
                      onClick={() => openModal(imageIndex)}
                    >
                      <img
                        src={image}
                        alt={`Image ${imageIndex + 1}`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 hover:bg-black/20" />
                      <div className="absolute right-2 bottom-2 rounded bg-black/50 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                        {imageIndex + 1}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={displayImages}
        currentIndex={selectedIndex}
        onIndexChange={setSelectedIndex}
      />
    </>
  );
};

export const ImageViewerDemo = ({ images }: ImageViewerDemoProps) => {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <div className="h1"></div>

          <p className="text-muted-foreground">點擊任何圖片以放大檢視，支援縮放、拖拽和鍵盤</p>
        </div>
        <ImageViewer images={images} />
      </div>
    </div>
  );
};
