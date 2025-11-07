import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"

export type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

export function Carousel({
  opts,
  plugins,
  setApi,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  setApi?: (api: CarouselApi) => void
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(opts, plugins)

  React.useEffect(() => {
    if (setApi) {
      setApi(emblaApi)
    }
  }, [emblaApi, setApi])

  return (
    <div ref={emblaRef} className={className} {...props}>
      <div className="flex">{children}</div>
    </div>
  )
}

export function CarouselContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function CarouselItem({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}
