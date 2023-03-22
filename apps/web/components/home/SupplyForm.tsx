"use client";

import { useForm } from "react-hook-form";
import { useWallet } from "lib/context/WalletContext";

export default function SupplyForm({ address, supplyToPool }: { address: string; supplyToPool }) {
	const { wallet } = useWallet();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const MAX = Number(100);
	// const MAX = Number(wallet?.balance);

	const onSubmit = (data) => supplyToPool({ amount: data.amount, address })

	if (!wallet || !wallet.balance) return <></>;

	return (
		<form className="p-4 rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4 space-y-2">
				<label className="block text-gray-700 font-bold" htmlFor="amount">
					Amount:
				</label>
				<input
					className="border border-gray-300 p-2 rounded-md"
					type="float"
					placeholder="amount"
					id="amount"
					{...register("amount", {
						validate: (value) => parseFloat(value) <= MAX || `Your balance of ${MAX} is not enough to perform this action`,
					})}
				/>
				{errors.amount && <p className="text-red-500 text-xs mt-1">{typeof errors.amount.message === "string" ? errors.amount.message : null}</p>}
			</div>
			<input className="bg-neutral-500 hover:bg-red-400 cursor-pointer text-white font-bold py-2 px-4 rounded transition-all" type="submit" value="Supply" />
		</form>
	);
}
