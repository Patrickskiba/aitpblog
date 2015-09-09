class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.string :company
      t.string :reason
      t.string :currentTech
      t.string :pointOfContact

      t.timestamps null: false
    end
  end
end
