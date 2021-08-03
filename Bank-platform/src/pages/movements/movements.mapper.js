export const mapAccountList = list => list.map(account=>{ return mapAccountFromApiToViewModel(account)})

const mapAccountFromApiToViewModel = account => {
    return {
        ...account,
        balance:`${account.balance} €`,
        amount:`${account.amount} €`,
        transaction: new Date(account.transaction)
        .toLocaleDateString(),
        realTransaction: new Date(account.realTransaction)
        .toLocaleDateString()
    }
}