import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Food & Beverage', 
    label: 'Food & Beverage' 
},
  { value: 'Restaurants', 
    label: 'Restaurants' 
},
  { value: 'Pet Shops', 
    label: 'Pet Shops' 
},
  { value: 'Fashion Boutique', 
    label: 'Fashion Boutique'
}
]

const MyComponent = () => (
    <div>
    <label>Business</label>
    <Select options={options}
    defaultValue={{ label: 'Food & Beverage', value: 'Food & Beverage' }}/>
    </div>
)

export default MyComponent;