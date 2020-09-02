class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.text :content
      t.boolean :checked
        # カラムの型　カラム名
      t.timestamps
    end
  end
end

