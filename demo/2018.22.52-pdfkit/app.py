import pdfkit

options = {
    'page-size': 'A4',
    'dpi': 4000,
    # 'print-media-type': True,
    'margin-top': '0.75in',
    'margin-right': '0.75in',
    'margin-bottom': '0.75in',
    'margin-left': '0.75in',
    'encoding': "UTF-8",
    'no-outline': None
}

# pdfkit.from_url('http://id.qq.com', 'out.pdf')
# css = 'test.css'
# pdfkit.from_file('test.html', 'out.pdf', options=options, css=css)
# pdfkit.from_string('Hello!', 'out.pdf')



body = """
    <html>
      <head>        
        <style>
        	body { font-size: 30px; }

			table { border-collapse:collapse; }
			table,th, td { border: 1px solid black; }

		    table { page-break-inside:auto; }
		    tr    { page-break-inside:avoid; page-break-after:auto; }
		    thead { display:table-header-group; }
		    tfoot { display:table-footer-group; }        	
        </style>
      </head>
      <body>
      	<table>
      		<thead>
      			<tr>
      				<th>name</th>
      				<th>remark</th>
      			</tr>
      		</thead>
      		<tbody>
      			<tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr><tr><td>xiaoka</td><td>hello</td></tr>
      		</tbody>
      	</table>
      </body>
      </html>
    """

pdfkit.from_string(body, 'out.pdf', options=options) #with --page-size=Legal and --orientation=Landscape