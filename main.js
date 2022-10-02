const axios = require('axios').default;

const contractAddress = process.env.ADDRESS
const maxId = Number(process.env.MAX_ID)

async function main() {
  for(let i = 1; i <= maxId; i++) {
    const result = await axios.post('https://market.zora.co/api/v3/process/queue', {
      key: `EVENT#${contractAddress}#${i}`
    })
    console.log(`Triggering cache refresh for: ${contractAddress} id: ${i} ${result.status}`)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

