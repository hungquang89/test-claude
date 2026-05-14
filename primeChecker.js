/**
 * Kiểm tra xem một số có phải là số nguyên tố hay không
 * @param {number} n - Số nguyên cần kiểm tra
 * @returns {boolean} - true nếu là số nguyên tố, false nếu không
 */
function isPrime(n) {
  // Xử lý edge case: số âm, 0, 1 không phải số nguyên tố
  if (n <= 1) return false;

  // 2 là số nguyên tố duy nhất chẵn
  if (n === 2) return true;

  // Các số chẵn > 2 không phải số nguyên tố
  if (n % 2 === 0) return false;

  // Chỉ cần kiểm tra đến căn bậc hai của n
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

// Xuất hàm nếu sử dụng trong Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = isPrime;
}

// Ví dụ sử dụng (chỉ chạy nếu file được thực thi trực tiếp)
if (require.main === module) {
  const testCases = [-5, 0, 1, 2, 3, 4, 17, 100, 97, 101];
  testCases.forEach(num => {
    console.log(`${num}: ${isPrime(num)}`);
  });
}