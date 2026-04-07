const AFFILIATE_PATTERNS = [
    /shope\.ee/i,
    /shopee\.vn/i,
    /shorten\.asia/i,
    /atv\.sh/i,
    /s\.lazada\.vn/i,
    /lazada\.vn/i,
    /tiki\.vn/i,
    /mycollection\.shop/i,
    /bit\.ly/i,
    /tinyurl\.com/i
];

const SPAM_KEYWORDS = [
    "voucher",
    "mã giảm giá",
    "link mua",
    "chốt đơn",
    "săn sale",
    "ghé shop",
    "quà tặng",
    "mua tại"
];

function isSpam(href, text) {
    if (AFFILIATE_PATTERNS.some(pattern => pattern.test(href) || pattern.test(text))) {
        return true;
    }
    const combinedText = (text || '').toLowerCase();
    if (SPAM_KEYWORDS.some(keyword => combinedText.includes(keyword.toLowerCase()))) {
        return true;
    }
    return false;
}

const testCases = [
    { href: 'https://shope.ee/abc', text: 'Mua nè', expected: true },
    { href: 'https://shopee.vn/product/123', text: 'Sale sập sàn', expected: true },
    { href: 'https://google.com', text: 'Bình thường', expected: false },
    { href: 'https://bit.ly/secure-link', text: 'Nhấn vào đây', expected: true },
    { href: '', text: 'Có voucher nè bác', expected: true },
    { href: '', text: 'Chốt đơn ngay', expected: true },
    { href: 'https://facebook.com', text: 'Thấy hay quá', expected: false }
];

testCases.forEach((tc, i) => {
    const result = isSpam(tc.href, tc.text);
    console.log(`Test Case ${i+1}: ${result === tc.expected ? 'PASSED' : 'FAILED'} (Expected ${tc.expected}, got ${result}) for text: "${tc.text}"`);
    if (result !== tc.expected) process.exit(1);
});
