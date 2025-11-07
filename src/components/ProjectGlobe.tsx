import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ProjectLocation {
  name: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  value: string;
  year: string;
  type: "water" | "rail" | "transport";
}

interface ProjectGlobeProps {
  projects: ProjectLocation[];
  height?: number;
}

export default function ProjectGlobe({ projects, height = 600 }: ProjectGlobeProps) {
  const globeEl = useRef<any>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectLocation | null>(null);
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    if (globeEl.current && !globeReady) {
      // Auto-rotate
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      
      // Set initial view to Australia
      globeEl.current.pointOfView({ lat: -25, lng: 133, altitude: 2.5 }, 1000);
      
      setGlobeReady(true);
    }
  }, [globeReady]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "water":
        return "#3b82f6"; // blue
      case "rail":
        return "#f59e0b"; // amber
      case "transport":
        return "#10b981"; // green
      default:
        return "#6366f1"; // indigo
    }
  };

  const handlePointClick = (point: any) => {
    setSelectedProject(point as ProjectLocation);
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.5 }, 1000);
    }
  };

  return (
    <div className="relative">
      <div className="rounded-lg overflow-hidden bg-slate-900" style={{ height: `${height}px` }}>
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          
          pointsData={projects}
          pointLat="lat"
          pointLng="lng"
          pointColor={(d: any) => getTypeColor(d.type)}
          pointAltitude={0.1}
          pointRadius={0.6}
          pointLabel={(d: any) => `
            <div style="
              background: rgba(0, 0, 0, 0.9);
              padding: 12px;
              border-radius: 8px;
              color: white;
              font-family: sans-serif;
              max-width: 250px;
              border: 2px solid ${getTypeColor(d.type)};
            ">
              <div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">${d.name}</div>
              <div style="font-size: 12px; color: #94a3b8; margin-bottom: 8px;">${d.city}, ${d.state}</div>
              <div style="font-size: 12px; margin-bottom: 4px;">
                <span style="color: #94a3b8;">Value:</span> ${d.value}
              </div>
              <div style="font-size: 12px;">
                <span style="color: #94a3b8;">Year:</span> ${d.year}
              </div>
            </div>
          `}
          onPointClick={handlePointClick}
          
          atmosphereColor="#3b82f6"
          atmosphereAltitude={0.15}
          
          width={undefined}
          height={height}
        />
      </div>

      {/* Legend */}
      <div className="absolute top-4 left-4 z-10">
        <Card className="bg-background/95 backdrop-blur">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 text-sm">Project Types</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#3b82f6" }} />
                <span>Water Infrastructure</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
                <span>Rail Infrastructure</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#10b981" }} />
                <span>Transport Infrastructure</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Selected Project Info */}
      {selectedProject && (
        <div className="absolute bottom-4 right-4 z-10 max-w-sm">
          <Card className="bg-background/95 backdrop-blur">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <Badge 
                  className="mb-2" 
                  style={{ 
                    backgroundColor: getTypeColor(selectedProject.type),
                    color: "white"
                  }}
                >
                  {selectedProject.type.charAt(0).toUpperCase() + selectedProject.type.slice(1)}
                </Badge>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>
              <h3 className="font-bold text-lg mb-1">{selectedProject.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {selectedProject.city}, {selectedProject.state}
              </p>
              <div className="space-y-1 text-sm">
                <div>
                  <span className="text-muted-foreground">Value:</span>{" "}
                  <span className="font-semibold">{selectedProject.value}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Year:</span>{" "}
                  <span className="font-semibold">{selectedProject.year}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-10">
        <Card className="bg-background/95 backdrop-blur">
          <CardContent className="p-3">
            <p className="text-xs text-muted-foreground">
              🖱️ Click and drag to rotate • Scroll to zoom • Click markers for details
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
