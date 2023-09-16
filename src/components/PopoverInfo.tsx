import React from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react'

export function PopoverInfo(props) {
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => setOpen(!open)
	const title = props.disclaimers.at(0).text
	return (
		<>
			<Button
				onClick={handleOpen}
				className="rounded-full border border-gray-300 bg-transparent px-2 py-2 text-center text-gray-400/75 shadow-none"
			>
				?
			</Button>
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>{title}</DialogHeader>
				<DialogBody divider>
					{props.disclaimers.slice(1, -1).map(({ text }, idx) => (
						<p key={`${props.id}-text-${idx}`}>{text}</p>
					))}
				</DialogBody>
			</Dialog>
		</>
	)
}
