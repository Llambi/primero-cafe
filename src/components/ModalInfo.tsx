import React from 'react'
import { Button, Dialog, DialogHeader, DialogBody } from '@material-tailwind/react'

export function ModalInfo(props) {
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => setOpen(!open)
	
	const titleDiscalimers = props.disclaimers.filter(({ type }) => type === 'main').map(({ text }) => text)
	const normalDisclaimers = props.disclaimers.filter(({ type }) => type === 'normal').map(({ text }) =>  text )

	return (
		<>
			<Button
				onClick={handleOpen}
				className="rounded-full border border-gray-300 bg-transparent px-2 py-2 text-center text-gray-400/75 shadow-none"
			>
				?
			</Button>
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>{titleDiscalimers.map((text, idx) => (
					<p key={`${props.id}-title-${idx}`}>{text}</p>
				))}</DialogHeader>
				<DialogBody divider>
					{normalDisclaimers.map(( text , idx) => (
						<p key={`${props.id}-text-${idx}`}>{text}</p>
					))}
				</DialogBody>
			</Dialog>
		</>
	)
}
