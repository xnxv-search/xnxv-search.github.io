function fileSafe(input)
{
	var proc = input, output;
	proc = proc.replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '');
	proc = proc.replace(/( +<+ +(?!.*>))|((?<!<.*) +>+ +)|(( *:+ +)|( +:+ *)|( *:+ *))/g," - ");
	proc = proc.replace(/([?*"]+)/g,"");
	proc = proc.replace(/(<+(?!.*>))|((?<!<.*)>+)|((?<!<.*)(?<=>.*)>)|([\/\\|]+)|(:+)/g," ");
	proc = proc.replace(/</g,"(").replace(/>/g,")");
	proc = proc.replace(/( {2,})/g," ").replaceAll('`',"'");
	output = proc.trim();
	return output;
}

