require "rails_helper"

describe TodoList do

  let(:user) { User.new }

  it 'should create a new todo list' do
    todo_list = TodoList.new(:name => 'My Todo',
                             :description => 'Its a brand new todo list',
                             :public => true,
                             :user => user)

    expect(todo_list.name).to eql 'My Todo'
    expect(todo_list.description).to eql 'Its a brand new todo list'
    expect(todo_list.public?).to eql true
    expect(todo_list.user).to eql user
    expect(todo_list.owner).to eql user

    expect(todo_list.valid?).to be_truthy
  end

  it 'should fail to save a todo list without name' do
    todo_list = TodoList.new(:description => 'Its a brand new todo list',
                             :public => true,
                             :user => user)

   expect(todo_list.valid?).to be_falsy
   expect(todo_list.errors[:name]).to eql ['must be set.']
  end

  it 'should fail to save a todo list without description' do
    todo_list = TodoList.new(:name => 'name',
                             :public => true,
                             :user => user)

   expect(todo_list.valid?).to be_falsy
   expect(todo_list.errors[:description]).to eql ['must be set.']
  end

  it 'should fail to save a todo list without a owner' do
    todo_list = TodoList.new(:name => 'name',
                             :public => true,
                             :description => 'The todo descr')

   expect(todo_list.valid?).to be_falsy
   expect(todo_list.errors[:user]).to eql ['must be set.']
  end

end
