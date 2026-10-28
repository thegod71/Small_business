const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

/** 1299 -> "₹1,299" */
export const formatPrice = (amount) => formatter.format(amount);

/** Discount percentage between MRP and selling price (0 when no discount). */
export const discountPercent = (price, mrp) => (mrp && mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0);
