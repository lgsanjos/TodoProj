require "rails_helper"

describe Task do
  let(:user) { User.new }
  let(:todo_list) { TodoList.new( :user => user) }

  it 'should create a task' do
    task = Task.new(:description => 'Do it and that',
                    :checked => false,
                    :todo_list => todo_list)

    expect(task.valid?).to be_truthy
    expect(task.description).to eql 'Do it and that'
  end

  it 'should validate description is present' do
    task = Task.new(:checked => false,
                    :todo_list => todo_list)

    expect(task.valid?).to be_falsy
    expect(task.errors[:description]).to eql ['must be set.']
  end

  it 'should validate it belongs to a todo list' do
    task = Task.new(:checked => false,
                    :description => 'My task to be done')

    expect(task.valid?).to be_falsy
    expect(task.errors[:todo_list]).to eql ['must be assigned.']
  end


end
