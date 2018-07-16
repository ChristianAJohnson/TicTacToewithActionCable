class AddPositionToMove < ActiveRecord::Migration[5.0]
  def change
    add_column :moves, :position, :integer
  end
end
