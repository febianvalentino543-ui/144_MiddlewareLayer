
## Hasil Pengujian (Postman)
 
### 1. GET: Mengambil Semua Data
<img width="3000" height="1872" alt="Pengujian GET" src="https://github.com/user-attachments/assets/9eaebe27-e765-4a47-93d9-4a86b21560bf" />

### 2. POST: Menambah Data
<img width="3000" height="1874" alt="Pengujian POST" src="https://github.com/user-attachments/assets/2a3b5957-8686-4d8d-9e49-f4bffab8e057" />

### 3. PUT: Mengubah Data
<img width="3000" height="1876" alt="Pengujian PUT" src="https://github.com/user-attachments/assets/886293e5-d434-4a31-a244-f0bf6831b6e9" />

### 4. DELETE: Menghapus Data 
<img width="3000" height="1876" alt="Pengujian DELETE" src="https://github.com/user-attachments/assets/9534bc66-95d2-445f-a529-33058c51e86f" />

## Tujuan Praktikum
 
Membuat program Express.js untuk CRUD dengan database PostgreSQL yang memiliki method `GET`, `POST`, `PUT`, dan `DELETE`, lengkap dengan middleware, validasi, dan error handling.
 
## Teknologi yang Digunakan
 
| Teknologi | Fungsi |
|---|---|
| Node.js (ES Module) | Runtime JavaScript |
| Express.js | Framework web server |
| pg (node-postgres) | Koneksi ke PostgreSQL |
| Joi | Validasi input (body dan parameter) |
| PostgreSQL | Database |
| Postman | Pengujian API |

## Daftar Endpoint
 
| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/biodata` | Mengambil semua data biodata |
| POST | `/biodata` | Menambah data biodata baru |
| PUT | `/biodata/:id` | Mengubah data biodata berdasarkan id |
| DELETE | `/biodata/:id` | Menghapus data biodata berdasarkan id |

## Fitur yang Diimplementasikan
 
### 1. Middleware
 
- `express.json()` dan `express.urlencoded()` untuk membaca body request.
- **Logger middleware** yang mencatat method, URL, status code, dan durasi setiap request.
- **`validateBody(schema)`** untuk memvalidasi body request.
- **`validateParams(schema)`** untuk memvalidasi parameter URL (`:id`).
### 2. Validasi (Joi)
 
| Field | Aturan |
|---|---|
| `id` | Angka bulat positif (opsional) |
| `nama` | String, 2 sampai 100 karakter, wajib |
| `nim` | String, 5 sampai 20 karakter, wajib |
| `kelas` | String, 1 sampai 20 karakter, wajib |
| `:id` (parameter) | Angka bulat positif, wajib |
 
### 3. Error Handling
 
- Validasi gagal mengembalikan status **400** beserta detail field yang salah.
- Data tidak ditemukan (PUT dan DELETE) mengembalikan status **404**.
- **Route tidak ditemukan** ditangani oleh handler 404.
- **Global error handler** menangkap error server dan mengembalikan status **500**.
- Query database memakai **parameterized query** (`$1, $2, ...`) untuk mencegah SQL Injection.
