class AddBoxOfficeEarningsToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :box_office_earnings, :integer
  end
end
