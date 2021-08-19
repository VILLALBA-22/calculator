const d = document
const result = d.querySelector('.result-p')

const keyValue = (typeKey, e) => {
	if (e.target.matches(typeKey)) {
		result.textContent += d.querySelector(typeKey).textContent
	}
}

d.addEventListener('DOMContentLoaded', () => {
	d.addEventListener('click', e => {
		keyValue('.key0', e)
		keyValue('.key1', e)
		keyValue('.key2', e)
		keyValue('.key3', e)
		keyValue('.key4', e)
		keyValue('.key5', e)
		keyValue('.key6', e)
		keyValue('.key7', e)
		keyValue('.key8', e)
		keyValue('.key9', e)

		keyValue('.keysum', e)
		keyValue('.keysus', e)
		keyValue('.keymul', e)
		keyValue('.keydiv', e)
		keyValue('.keypoint', e)

		if (e.target.matches('.keyreset')) {
			result.textContent = ''
		}
		if (e.target.matches('.keydel')) {
			result.textContent = result.textContent.slice(0, -1)
		}

		if (e.target.matches('.keyresult ')) {
			const result_process = eval(
				d.querySelector('.result-p').textContent.replaceAll('x', '*')
			)

			d.querySelector('.result-p').textContent = result_process || 'Error'
		}
	})
})
