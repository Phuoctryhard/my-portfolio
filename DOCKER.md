# Docker cho dự án Portfolio

Dự án này là trang Next.js được build ra static site (`output: "export"` trong [next.config.ts](next.config.ts)). Docker giúp đóng gói toàn bộ trang thành 1 image, ai cũng chạy được mà không cần cài Node.js, npm hay bất kỳ dependency nào — chỉ cần Docker.

## Các file liên quan

| File | Vai trò |
|---|---|
| `Dockerfile` | Build image production: build source → phục vụ bằng nginx |
| `Dockerfile.dev` | Chạy môi trường dev (`next dev`, hot-reload) trong container |
| `docker-compose.yml` | Chạy nhanh bằng 1 lệnh, tự map port |
| `.dockerignore` | Loại các file/thư mục không cần đưa vào image (`node_modules`, `.git`,...) |

## Cách hoạt động của Dockerfile (production)

`Dockerfile` dùng **multi-stage build** — 2 giai đoạn:

1. **Stage `builder`** (image `node:20-alpine`)
   - Cài dependencies (`npm ci`)
   - Build source Next.js (`npm run build`) → sinh ra thư mục tĩnh `out/`
2. **Stage `runner`** (image `nginx:alpine`)
   - Chỉ copy thư mục `out/` từ stage builder sang
   - Dùng nginx để serve các file HTML/CSS/JS tĩnh

**Lợi ích của multi-stage build:**
- Image cuối cùng rất nhẹ (không chứa Node.js, `node_modules`, source code — chỉ có nginx + file tĩnh)
- Không lộ mã nguồn ra ngoài, chỉ có sản phẩm build sẵn
- Người dùng cuối không cần biết dự án dùng công nghệ gì bên trong

## Chạy production (khuyên dùng)

```bash
docker compose up --build
```

- Truy cập: [http://localhost:3000](http://localhost:3000)
- `docker compose up --build` sẽ tự build lại image mỗi khi source thay đổi
- Dừng: `Ctrl + C`, hoặc `docker compose down`

Muốn đổi port ra ngoài (ví dụ 8080 thay vì 3000), sửa trong `docker-compose.yml`:

```yaml
ports:
  - "8080:80"
```

## Chạy không dùng compose (thuần Docker)

```bash
docker build -t portfolio .
docker run -p 3000:80 portfolio
```

## Chạy môi trường dev (hot-reload)

Dùng khi cần sửa code và xem thay đổi ngay, không cần build lại image:

```bash
docker build -f Dockerfile.dev -t portfolio-dev .
docker run -p 3000:3000 -v ${PWD}:/app -v /app/node_modules portfolio-dev
```

- Truy cập: [http://localhost:3000](http://localhost:3000)
- `-v ${PWD}:/app` mount source code từ máy vào container để hot-reload hoạt động
- `-v /app/node_modules` giữ nguyên `node_modules` đã cài trong image, tránh bị máy host ghi đè

## Lưu ý

- Docker Desktop phải đang chạy trước khi dùng các lệnh trên (Windows/Mac)
- File `.dockerignore` giúp build nhanh hơn và tránh đưa nhầm file nhạy cảm (`.env`, `.git`) vào image
- Vì dự án export ra static site nên **không cần** biến môi trường runtime — mọi cấu hình (nếu có) phải set tại thời điểm build
