class Cat < ApplicationRecord
  @@COLORS = ['White', 'Black', 'Red', 'Blue', 'Cream', 'Brown', 'Cinnamon', 'Fawn']

  def self.colors
    @@COLORS
  end

  validates :birth_date, :name, presence: true
  validate :sex
  validates :color, inclusion: {in: @@COLORS }

  

  def validate(sex)
    sexes = ['M', 'F']
    unless sexes.include?(sex) 
      cat.errors[:sex] << 'Please enter M or F.'
    end
  end
end
