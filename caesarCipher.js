
	function encrypt(text, s)
	{
		let result=""
		for (let i = 0; i < text.length; i++)
		{
			let char = text[i];
			if (char.toUpperCase(text[i]))
			{
				let ch = String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
				result += ch;
			}
			else
			{
				let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
				result += ch;
			}
		}
		return result;
	}
	
	// Driver code
	let text = "OMAR";
	let s = 100;
	console.log(encrypt(text,s))
