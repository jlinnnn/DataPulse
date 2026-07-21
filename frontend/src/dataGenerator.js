export const simpleData = [
    // Cluster 1 centered around (10, 10)
    ...Array.from({ length: 10 }, () => ({ x: 10 + Math.random() * 2 - 1, y: 10 + Math.random() * 2 - 1 })),
    // Cluster 2 centered around (30, 30)
    ...Array.from({ length: 10 }, () => ({ x: 30 + Math.random() * 2 - 1, y: 30 + Math.random() * 2 - 1 })),
    // Cluster 3 centered around (50, 10)
    ...Array.from({ length: 10 }, () => ({ x: 50 + Math.random() * 2 - 1, y: 10 + Math.random() * 2 - 1 })),
    // Cluster 4 centered around (70, 30)
    ...Array.from({ length: 10 }, () => ({ x: 70 + Math.random() * 2 - 1, y: 30 + Math.random() * 2 - 1 })),
    // Cluster 5 centered around (90, 10)
    ...Array.from({ length: 10 }, () => ({ x: 90 + Math.random() * 2 - 1, y: 10 + Math.random() * 2 - 1 }))
  ];