-- CreateTable
CREATE TABLE "Post" (
    "blog_id" SERIAL NOT NULL,
    "blog_key" TEXT NOT NULL,
    "blog_title" TEXT NOT NULL,
    "likes_count" INTEGER[],
    "views_count" INTEGER[],

    CONSTRAINT "Post_pkey" PRIMARY KEY ("blog_id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://blog-1302483222.cos.ap-shanghai.myqcloud.com/images.jpg',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
