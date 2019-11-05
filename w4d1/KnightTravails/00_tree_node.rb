require "byebug"
class PolyTreeNode
    attr_reader :parent, :children, :value
    attr_writer :children, :parent
   
    def initialize(value)
        @parent = nil
        @children = []
        @value = value
    end

    def parent=(node_parent)
        
        if !parent.nil? 
            parent.children.reject!{|ele| ele == self}

        end
        if !node_parent.nil?
            @parent = node_parent
            child_array = node_parent.children
            child_array.push(self) if !child_array.include?(self)
        else
            @parent = nil
        end
    end

    def add_child(child)
        children << child if !children.include?(child)
        child.parent = self
    end

    def remove_child(child)
        if children.include?(child)
            child.parent = nil
            children.reject! {|ele| ele == child}
        else
            raise "error: passed arguement is not child."
        end

    end

    # def inspect
    #     "<stact-trace: #{value} >" 
    # end

    def dfs(target)
        return nil if self == nil
        return self if target == self.value
        result = nil
        self.children.each do |child|
            # if child.value == target
            #     result = child
            #     return result
            result = child.dfs(target)
            if !result.nil?
                return result
            end

        end
        return nil
    end

    def bfs(target)
       queue = [self]
       
       until queue.empty? 
        #debugger
            ele = queue.shift
            return ele if ele.value == target
            ele.children.each do |element|
                if element.value == target
                    return element
                else
                    queue += element.children
                end
            end 
        end
       nil
    end
end
# target = f

#                       a

#                  b          c

#             d       e   f         g  


