import { useEffect, useMemo, useState } from "react";
import * as S from "./SpacingOut.style";

const STAR_COUNT = 400;
const SHOOTING_STAR_INTERVAL = 2000;
const SHOOTING_STAR_DURATION = 1000;

type StarField = {
  id: number;
  size: number;
  top: number;
  left: number;
  opacity: number;
  duration: number;
};

type ShootingStarField = {
  id: number;
  top: number;
  left: number;
};

type OrbitPlanet = {
  size: number;
  duration?: number;
  planetSize?: number;
  planetColor?: string;
  planetOffset?: number;
  borderWidth?: number;
  borderColor?: string;
  withRing?: boolean;
};

const orbitPlanets: OrbitPlanet[] = [
  { size: 80, duration: 0.625, planetSize: 7, planetColor: "#6f5f5f", planetOffset: -5 },
  { size: 110, duration: 1.25, planetSize: 10, planetColor: "#e7a71f", planetOffset: -5 },
  { size: 140, duration: 1.875, planetSize: 10, planetColor: "#63bee2", planetOffset: -5 },
  { size: 170, duration: 2.5, planetSize: 10, planetColor: "red", planetOffset: -5 },
  { size: 240, borderWidth: 25, borderColor: "rgba(80, 80, 80, 0.3)" },
  { size: 260, duration: 3.125, planetSize: 30, planetColor: "#cf9b2b", planetOffset: -15 },
  { size: 320, duration: 3.75, planetSize: 20, planetColor: "#cf7a2b", planetOffset: -10, withRing: true },
  { size: 360, duration: 4.37, planetSize: 15, planetColor: "#10c593", planetOffset: -8 },
  { size: 400, duration: 5, planetSize: 15, planetColor: "#1470e4", planetOffset: -8 },
];

const SpacingOut = () => {
  const stars = useMemo<StarField[]>(
    () =>
      Array.from({ length: STAR_COUNT }, (_, id) => ({
        id,
        size: Math.random() * 3,
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: Math.random(),
        duration: Math.random() * 3 + 2,
      })),
    []
  );

  const [shootingStars, setShootingStars] = useState<ShootingStarField[]>([]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const id = Date.now() + Math.random();
      const nextStar = {
        id,
        top: Math.random() * 50,
        left: Math.random() * 100,
      };

      setShootingStars((current) => [...current, nextStar]);

      window.setTimeout(() => {
        setShootingStars((current) => current.filter((star) => star.id !== id));
      }, SHOOTING_STAR_DURATION);
    }, SHOOTING_STAR_INTERVAL);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <S.Page>
      {stars.map((star) => (
        <S.Star
          key={star.id}
          $size={star.size}
          $top={star.top}
          $left={star.left}
          $opacity={star.opacity}
          $duration={star.duration}
        />
      ))}

      {shootingStars.map((star) => (
        <S.ShootingStar key={star.id} $top={star.top} $left={star.left} />
      ))}

      <S.Solar>
        {orbitPlanets.map((planet, index) => (
          <S.OrbitRing
            key={`${planet.size}-${index}`}
            $size={planet.size}
            $duration={planet.duration}
            $planetSize={planet.planetSize}
            $planetColor={planet.planetColor}
            $planetOffset={planet.planetOffset}
            $borderWidth={planet.borderWidth}
            $borderColor={planet.borderColor}
            $withRing={planet.withRing}
          />
        ))}
      </S.Solar>
    </S.Page>
  );
};

export default SpacingOut;
