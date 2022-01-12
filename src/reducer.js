const initState={
	friends:[{id:1,name:"Bharat Agrawal"},{id:2,name:"Arpit Sharma"},{id:3,name:"Lakshya Akar"},{id:4,name:"Vishal Jain"},{id:5,name:"Jayant Khandelwal"}],
	expenses:[{desc:'Movie Tickets',price:500,friends:[{id:1,name:"Bharat Agrawal",contri:250},{id:2,name:"Arpit Sharma",contri:250}]},{desc:'Flat rent',price:18000,friends:[{id:1,name:"Bharat Agrawal",contri:6000},{id:2,name:"Arpit Sharma",contri:6000},{id:3,name:"Lakshya Akar",contri:6000}]}],
	groups:[{id:1,gname:'Trip',friends:[{id:1,name:"Bharat Agrawal"},{id:2,name:"Arpit Sharma"},{id:3,name:"Lakshya Akar"},{id:5,name:"Jayant Khandelwal"}],expenses:[{desc:'Movie Tickets',price:500,friends:[{id:1,name:"Bharat Agrawal",contri:250},{id:2,name:"Arpit Sharma",contri:250}]}]}]
}

const reducer=(state=initState,action)=>{
	if(action.type==='ADD_FRIEND')
	{
		return {
			...state,
			friends:[...state.friends,action.obj]
		}
	}
	if(action.type==='ADD_EXPENSE')
	{
		return {
			...state,
			expenses:[...state.expenses,action.obj]
		}
	}
	if(action.type==='ADD_GROUP')
	{
		return {
			...state,
			groups:[...state.groups,action.obj]
		}
	}
	if(action.type==='ADD_GROUPEXPENSE')
	{
		const newarr=state.groups.slice();
		newarr[action.index].expenses.push(action.obj);
		return {
			...state,
			groups:newarr
		}
	}
	return state;
}

export default reducer;