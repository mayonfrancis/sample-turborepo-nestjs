import { CreditDomain } from "@mayon-sc-local/credit-domain";

async function main() {
  const c = new CreditDomain();
  await c.init();

  console.log(`DATA out: ${c.services.usecase1.getComplicatedData()}`);
}

main();
