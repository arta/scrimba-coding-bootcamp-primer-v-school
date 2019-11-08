// Create a model to represent the database of a new social media platform you're creating. 
// It can be about whatever you want, but it needs the following:

// At least 3 nested levels of data(including objects and arrays)
// At least 1 method
// Span across at least 50 lines of code. (No empty lines)
// Example:

// var mountainClimber = {
// name: "Bob",
//     age: 31,
//     favoriteClimbs: [],
//     mountainClimbingFriends: [
//         {
//             name: "Sarah",
//             age: 31,
//             favoriteClimbs: [
//                 {
//                     climbName: "Mount Everest",
//                     difficulty: 10
//                 },
//                 //                ... etc ...
//             ]
//         },
//         {

//         }
//     ]
// }

let provider = {
	firstName: 'Lori',
	middleName: 'Anna',
	lastName: 'Wytinski',
	middleInitial: function() {
		return this.middleName.slice(0,1);
	},
	name: function() {
		return `${this.firstName} ${this.middleInitial()}. ${this.lastName}`
	},
	certificates: ['CNA', 'CPR', 'RN'],
	employment: {
		active: 'Active',
		startDate: '3-13-1997',
		position: 'SW',
		lastContactDate: '2-23-2017',
		notes: 'We met in person, very nice lady, likes football.',
		employer: {
			name: 'Serenity Care',
			type: 'Hospice',
			phone: '783-323-9080',
			inpatients: true,
			beds_count: 30,
			address: {
				street: '123 Main St',
				city: 'Big Town',
				state: 'ST',
				zip: 32141
			}
		},
		service: {
			status: 'Active',
			startDate: '9-12-2019',
			recipient: {
				name: 'Rebecca Thompson',
				phone: '323-392-0093',
				status: 'Active',
				pastCaregivers: [
					{	
						name: 'Sam Dang',
						phone: '420-579-2365'
					}, 
					{
						name: 'Dolly Molly',
						phone: '453-798-2343'
					} 
				],
				pets: true,
				DNR: true,
				address: {
					street: '343 Side St',
					city: 'Smallville',
					state: 'ST',
					zip: 32133
				}
			}
		}
	}
}
console.log(provider.name());
console.log(provider.employment.service.recipient.name);

// After you create the base object, you need to:

// Add 2 properties to one of the objects(doesn't matter what level of nested data you do this to)
console.log(provider.employment.phone); // undefined
provider.employment.phone = '783-323-4922'
console.log(provider.employment.phone);

console.log(provider.employment.service.notes); // undefined
provider.employment.service.notes = '10-25-2019: The meeting went great todaay'
console.log(provider.employment.service.notes);

// Add 2 items to at least one of the arrays in your data
console.log(provider.certificates); // undefined
provider.certificates.push('LPN');
provider.certificates.push('MSS');
console.log(provider.certificates);

