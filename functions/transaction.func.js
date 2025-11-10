export function getCost(kind, miniPayload) {

  let cost;
  if (kind === "Airtime") {
    cost = miniPayload.amount;
  } else if (kind === "Data") {
    cost = miniPayload.bundle.price;
  } else if (kind === "Funding") {
    cost = miniPayload.amount;
  } else {
    throw new Error("Unknow transaction request!")
  }
  return cost
}