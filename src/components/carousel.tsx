"use client";

import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

interface SlideInterface {
  author: string;
  date: string;
  avatar: string;
  content: string[];
}

const Carousel = ({ slides = [] }: { slides: Array<SlideInterface> }) => {
  const autoplay = useRef(AutoPlay({ delay: 5000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <Box sx={{ position: "relative" }}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-2">
          {slides.map((slide, index) => (
            <div
              className="embla__slide"
              key={index}
              style={{ flex: "0 0 100%" }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1.5,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={slide.avatar}
                        alt={slide.author}
                        sx={{
                          width: 32,
                          height: 32,
                          mr: 1.5,
                          bgcolor: "primary.main",
                        }}
                      />
                      <Typography variant="body1" fontWeight={500}>
                        {slide.author}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="caption" color="text.secondary">
                        {slide.date.split(", ")[0]}
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        color="text.secondary"
                      >
                        {slide.date.split(", ")[1]}
                      </Typography>
                    </Box>
                  </Box>
                  <Stack spacing={0.5}>
                    {slide.content.map((line, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        color="text.secondary"
                      >
                        {line}
                      </Typography>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <IconButton
        onClick={scrollPrev}
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.8)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
          boxShadow: 1,
          p: 0.5,
          zIndex: 2,
        }}
        size="small"
        aria-label="Previous slide"
      >
        <ChevronLeftOutlined fontSize="small" />
      </IconButton>
      <IconButton
        onClick={scrollNext}
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.8)",
          "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
          boxShadow: 1,
          p: 0.5,
          zIndex: 2,
        }}
        size="small"
        aria-label="Next slide"
      >
        <ChevronRightOutlined fontSize="small" />
      </IconButton>

      {/* Pagination dots */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mt: 1 }}>
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => scrollTo(index)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: selectedIndex === index ? "primary.main" : "grey.300",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
