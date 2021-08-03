export const mapAccountList = list => list.map(account=>{ return mapAccountFromApiToViewModel(account)})

const mapAccountFromApiToViewModel = account => {
    return {
        ...account,
        balance:`${account.balance} €`,
        lastTransaction: new Date(account.lastTransaction)
        .toLocaleDateString()
    }
}

