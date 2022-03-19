import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	brand: {
		fontWeight: 'bold',
		fontSize: '1.5rem',
	},
	grow: {
		flexGrow: 1,
	},
	navbar: {
		backgroundColor: '#203040',
		'& a': {
			color: '#fff',
			marginLeft: 10,
		},
	},
	main: {
		minHeight: '80vh',
	},
	section: {
		margin: '10px 0px',
	},
	footer: {
		marginTop: '10px',
		textAlign: 'center',
	},
})
