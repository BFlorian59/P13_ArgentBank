import Translation from "../componant/translations/Translation"
import { selectUser } from '../utils/selector'
import { useSelector} from "react-redux"
import "../utils/styles/user.css";
import EditName from "../componant/editName/EditName";

function User() {
    const user = useSelector(selectUser)
    return user.data ?(
    <main className="main bg-dark">
      <EditName />
      <h2 className="sr-only">Accounts</h2>
      <Translation account_title="Argent Bank Checking (x8349)" account_amount="$2,082.79" account_amount_description="Available Balance" />
      <Translation account_title="Argent Bank Savings (x6712)" account_amount="$10,928.42" account_amount_description="Available Balance" />
      <Translation account_title="Argent Bank Credit Card (x8349)" account_amount="$184.30" account_amount_description="Current Balance" />
    </main>
    ):
    (
      <div>Error</div>
    )
}

export default User