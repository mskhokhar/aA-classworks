class Employee
  def initialize(name,title,salary,boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    bonus = salary * multiplier
  end
  
  protected
  attr_accessor :name, :title, :salary, :boss
end

class Manager < Employee
  def initialize(name,title,salary,boss)
    super
    @employees = []
  end

  def bonus(multiplier)
    
    total_salary = 0
    employees.each do |employee|
      if employee.is_a? Employee
        total_salary += employee.salary
      else
        total_salary += employee.bonus(multiplier)
      end 

    end
    total_salary * multiplier

  end
  
 
  
  attr_accessor :employees # atrr_reader + attr_writer

end

