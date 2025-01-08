-- AddForeignKey
ALTER TABLE "AiTools" ADD CONSTRAINT "AiTools_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "AiToolsCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
