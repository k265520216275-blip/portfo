/**
 * ============================================================================
 *  TRANG CÁ NHÂN – ĐOÀN THẾ NGHĨA
 *  Google Apps Script Web App: mở link là thấy trang giới thiệu bản thân.
 * ============================================================================
 *
 *  CÀI ĐẶT (khoảng 3 phút)
 *  1. Mở https://script.google.com → "Dự án mới". Đặt tên: "Trang cá nhân".
 *  2. Dán toàn bộ file này vào Code.gs (thay nội dung mặc định).
 *  3. Bấm dấu "+" cạnh "Tệp" → "HTML" → đặt tên đúng là: Index
 *     Dán toàn bộ nội dung file Index.html vào đó. Lưu (Ctrl + S).
 *  4. Bấm "Triển khai" (Deploy) → "Triển khai mới" → chọn loại "Ứng dụng web".
 *       - Thực thi dưới dạng: Tôi (doanthenghia276@gmail.com)
 *       - Người có quyền truy cập: Bất kỳ ai
 *     Bấm "Triển khai" → cấp quyền → sao chép "URL ứng dụng web" (…/exec).
 *  5. Gắn link đó vào LinkedIn, CV hoặc hồ sơ học bổng.
 *
 *  CẬP NHẬT NỘI DUNG
 *  Sửa Index.html → Lưu → "Triển khai" → "Quản lý triển khai" → biểu tượng bút
 *  → Phiên bản: "Phiên bản mới" → "Triển khai". Link /exec giữ nguyên.
 * ============================================================================
 */

const SITE = {
  TITLE: 'Đoàn Thế Nghĩa – Hồ sơ cá nhân',
};

/** Trả về trang khi có người mở URL ứng dụng web. */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle(SITE.TITLE)
    // Apps Script chỉ cho phép một số thẻ meta (viewport...), không có "description".
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    // Cho phép nhúng trang vào Google Sites hoặc trang khác bằng iframe.
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
