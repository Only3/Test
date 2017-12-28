# calc

function Test {
Param (
   [String]$Name = "al",
   [String]$Age
)
echo "$Name $Age"
[Environment]::Exit(1)
}
