export function formatDate(inputString) {
    // Tạo một đối tượng Date từ chuỗi đầu vào
    const date = new Date(inputString);

    // Lấy thông tin ngày, tháng, năm, giờ, phút, giây
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Định dạng lại chuỗi ngày tháng theo ý muốn, ví dụ: "20/11/2023 06:22:24"
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
}