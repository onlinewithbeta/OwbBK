export function describeTransaction(username, miniPayload, kind) {
  let statement;
  if (kind === 'Data') {

    statement = `${username} Bought ${miniPayload.bundle.data} of ${kind} for ${miniPayload.phone}.`;

  } else if (kind === 'Airtime') {

    statement = `${username} Bought ₦${miniPayload.amount} ${miniPayload.network} ${kind} for ${miniPayload.phone}.`;

  } else if (kind === "funding") {

    statement = `${username} Fund account with ₦${miniPayload.funds}.`;

  } else {
    throw new Error('Unknown Transaction')
  }
  return statement;
}