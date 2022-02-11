# c6-express-pg-ejs

BIKIN APLIKASI SEKOLAHAN (SCHOOL APPS) ADA TEACHER, STUDENTS, SUBJECTS

Bapak Ichsan ingin membuat aplikasi sederhana untuk sekolah yang dimilikinya, sekolahnya masih sangat kecil, hanya ada murid kelas 1 SD, belum ada murid kelas 2SD dst.

Bapak Ichsan ingin menyimpan data murid, pelajaran, dan juga data guru di sekolah yang dimiliki

maka dari itu bapak ichsan ingin membuat aplikasi dengan kriteria

Tabel Guru:

1. id
2. first_name
3. last_name
4. email
5. gender

Tabel Murid:

1. id
2. first_name
3. last_name
4. email
5. gender
6. birth_date

Tabel Pelajaran:

1. id
2. nama_pelajaran

Requirements di aplikasi sederhana ini itu untuk membuat database dengan nama database:
`sekolahku`

akan ada actions yaitu:

1. create murid
2. read murid
3. update murid
4. lihat detail murid
5. delete murid (DO)

6. create guru
7. read guru
8. update guru
9. lihat detail guru
10. delete guru (DIPECAT)

11. create mata pelajaran
12. read mata pelajaran
13. update mata pelajaran
14. lihat detail mata pelajaran
15. delete mata pelajaran (udah gapenting)

Step yang perlu dilakukan

### Inisiasi database

- masuk ke console database
- psql -U postgres
- `CREATE DATABASE "sekolahku";`

### inisiasi project express

- npm init -y
- lalu install `pg ejs express`
- baru kita bikin server
