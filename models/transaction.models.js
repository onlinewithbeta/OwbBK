transactions: [{
    type: {
      type: String,
      enum: ['Airtime', 'Data', 'Funding', 'Share'],
      required: true
    },
    cost: {
      type: Number,
      required: true,
      min: [0, "Amount cannot be negative"]
    },
    description: String,
    status: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      default: 'pending'
    },
    date: {
      start:{type: Date,
      default: Date.now},
      verified:{type: Date,
        default: null
      }
      
    },
    gmail: {
      type: String,
    },
    old_balance: {
    type: Number,
    default: 0,
    min: [0, "Balance cannot be negative"]
  },
  new_balance: {
    type: Number,
    default: 0,
    min: [0, "Balance cannot be negative"]
  },
  old_balance: {
    type: Number,
    default: 0,
    min: [0, "Balance cannot be negative"]
  },
  }],