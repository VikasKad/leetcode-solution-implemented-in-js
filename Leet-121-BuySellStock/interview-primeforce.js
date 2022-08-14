let inventory = [{
    brand: 'Parle',
    products: [{
      brand: 'Parle Agro',
      products: [{
          brand: 'Frooti',
          products: []
        },
        {
          brand: 'Bailey',
          products: []
        }
      ]
    }]
  },
  {
    brand: 'Pepsico',
    products: [{
        brand: 'VB',
        products: [{
            brand: 'Lays',
            products: []
          },
          {
            brand: 'Kurkure',
            products: [{
              brand: 'Mad Angles',
              products: []
            }]
          }
        ]
      },
      {
        brand: 'Pepsi',
        products: []
      }
    ]
  },
  {
    brand: 'Cadbury',
    products: []
  }
]

//Output:
//None:Pepsico
//None:Parle
//None:Cadbury
//Parle:Parle Agro
//Parle Agro:Frooti
//Parle Agro:Bailey
//Pepsico:VB
//VB:Lays
//VB:Kurkure

function printObj(val) {
  /* console.log('-----print')
  
  for (let i = 0; i < val.length; i++) {
    console.log(val[i], typeof val[i]);
    if (typeof val === 'object') {
      for(let j=0;j<val[i].products.length;j++){
      printObj(val[i])      	
      }
  
    } else {
      console.log('printing value');
    }
  
  } */
  Object.keys(val).forEach((key) => {
/*     console.log(`key: ${key} Obj ${val[key]}`) */
    if (typeof val[key] === 'object') {
      printObj(val[key]);
    } else {
      console.log('value',val[key])
    }
  })
}
printObj(inventory);
