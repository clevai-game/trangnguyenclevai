import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      // Tăng số lượng hoa đào
      for (let i = 0; i < 25; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 1.2 + 1, // Larger petals
          duration: Math.random() * 6 + 10, // Slower fall
          delay: Math.random() * 8,
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}rem`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        />
      ))}
    </>
  );
};

export default FallingPetals;
