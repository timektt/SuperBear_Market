export const formatTHB = (satang: number): string => {
  return "฿" + (satang / 100).toLocaleString("th-TH", { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};