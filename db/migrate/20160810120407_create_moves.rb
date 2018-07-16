class CreateMoves < ActiveRecord::Migration[5.0]
  def change
    create_table :moves do |t|
      t.references :game, foreign_key: true
      t.integer :tile

      t.timestamps
    end
  end
end
