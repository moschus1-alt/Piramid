const RAW_LEVELS_DESC = [
  { moves: 38, board: "EoBBBoEooGIJEAAGIJCCCHIJooFHooooFDDo" },
  { moves: 38, board: "GoIKBBGHIKoMGHAALMCCJoLNooJDDNEEFFFN" },
  { moves: 38, board: "BBCCCLIDDDoLIAAKooEEJKooooJFFFGGGHHo" },
  { moves: 38, board: "oBBBCCDDEEoMAAJooMIoJFFNIGGKLNHHHKLN" },
  { moves: 38, board: "HIBBCCHIDDLoHAAKLoEEEKLoooJFFoooJGGo" },
  { moves: 38, board: "BBHooKGoHJoKGAAJooCCIJDDooIEELFFFooL" },
  { moves: 38, board: "oBBBCCooIDDLAAIooLHEEJKMHFFJKMGGGJKM" },
  { moves: 38, board: "HBBCCCHoJDDDAAJooLoIEEKLoIFFKMGGGoKM" },
  { moves: 38, board: "BBBJooooIJCCAAIooKHoIDDKHEEEoLFFGGoL" },
  { moves: 38, board: "oGBBBJoGoooJoAAIoKCCHIoKFoHDDKFoHEEE" },
  { moves: 38, board: "FoBBBoFooHJoAAoHJoCCCIJoooGIDDEEGooo" },
  { moves: 38, board: "BBHoooFoHCCCFAAIoJDDoIoJGooIoKGEEEoK" },
  { moves: 38, board: "GBBBoKGCCIoKAAHIoKooHJDDooHJoooEEFFo" },
  { moves: 38, board: "GHBBCCGHDDKoGAAJKLEEEJKLooIFFoooIooo" },
  { moves: 38, board: "ooJBBBooJoCCAAJoKLHIDDKLHIEEEMFFGGoM" },
  { moves: 38, board: "FoHBBBFoHIooFAAIoJoGoIoJoGCCoKDDDEEK" },
  { moves: 38, board: "BBBCCMooJDDMAAJKooIEEKFFIGGKLNHHooLN" },
  { moves: 38, board: "oBBBCCooIDDLAAIooLHoEEKMHFFJKMGGGJKM" },
  { moves: 38, board: "oooIBBooHICCAAHJKMDDoJKMGEEELMGFFFLo" },
  { moves: 38, board: "BBoJooHooJCCHAAJoKooIDDKEEIooLFFIGGL" },
  { moves: 38, board: "FooBBBFooHoJAAoHoJCCCIoJooGIDDEEGooo" },
  { moves: 38, board: "BBIJooFHIJLMFHAALMGCCKoMGooKDDGEEEoo" },
  { moves: 38, board: "oooIBBooHICCAAHJKLDDoJKLGEEEKMGFFFoM" },
  { moves: 38, board: "oooIBBooHICCAAHJKMDDoJKMGEEELNGFFFLN" },
  { moves: 38, board: "HBBoCCHoJDDDAAJooLoIEEKLoIFFKMGGGoKM" },
  { moves: 38, board: "GBBIoJGCCIoJAAHIoKooHDDKooHooooEEoFF" },
  { moves: 38, board: "BBCCCoHooJDDHAAJoKooIEEKFFIooKooIGGG" },
  { moves: 38, board: "oooIBBooHICCAAHJKLDDoJKLGEEEKMGoFFoM" },
  { moves: 38, board: "oooIBBooHICCAAHJKMDDoJKMGEEELNGoFFLN" },
  { moves: 38, board: "oBBBKoCCoIKoAAoILoGDDJLoGoHJEEFFHooo" },
  { moves: 38, board: "BBBIJoCCCIJoAAoIKLGoDDKLGoHEELFFHooo" },
  { moves: 38, board: "BBBKCCooJKDDAAJKoMIEEFFMIoGGLoHHooLo" },
  { moves: 38, board: "FoIoBBFoIoKLAAIoKLoHCCCLGHoJDDGEEJoo" },
  { moves: 38, board: "BBBIKMCCoIKMAAoJLNGDDJLNGoHEENFFHooo" },
  { moves: 38, board: "ooIBBBooIJCCoAAJoooHDDKLoHEEKLFFGGKL" },
  { moves: 38, board: "BBBIJoCCCIJoAAoIKoGoDDKLGoHEELFFHooo" },
  { moves: 38, board: "BBoIJoCCCIJoAAoIKLGoDDKLGoHEELFFHooo" },
  { moves: 38, board: "BBoIooFGoIKLFGAAKLFCCJoLooHJDDooHEEE" },
  { moves: 38, board: "BBBCCLooIDDLAAIoKMHEEEKMHooJFFGGoJoo" },
  { moves: 38, board: "GoIBBBGoIJCCGAAJoLoHooKLoHDDKMEEFFKM" },
  { moves: 38, board: "ooJBBBGoJKCCGAAKLMHIDDLMHIEELNFFoooN" },
  { moves: 38, board: "BBBJKLGCCJKLGoAAKLDDIooooHIooooHEEFF" },
  { moves: 38, board: "BBoIJoCCCIJoAAoIKoGoDDKLGoHEELFFHooo" },
  { moves: 38, board: "GBBBKLGoCCKLAAHIKMDDHIoMoooJEEFFoJoo" },
  { moves: 38, board: "oooJBBFoIJoLFoIAALGCCCKMGHDDKMoHEEKo" },
  { moves: 38, board: "GBBBoLGoHCCLAAHIKMoDDIKMoooJEEoFFJoo" },
  { moves: 39, board: "ooHBBoCCHIKoGAAIKoGDDEEoFFFJoooooJoo" },
  { moves: 39, board: "GIBBoLGICCoLHAAKoMHoJKoMHoJDDDEEEFFo" },
  { moves: 39, board: "oHBBCCoHoJKoAAoJKoGDDDKoGoIEEoGoIFFo" },
  { moves: 39, board: "GIBBoLGICCoLHAAKoMHoJKoMHoJDDDEEFFFo" },
  { moves: 39, board: "GoJBBBGoJKoLHAAKoLHCCDDLHIEEoooIFFoo" },
  { moves: 39, board: "BBJKooGIJKMNGIAAMNHCCLoNHooLDDHEEEFF" },
  { moves: 39, board: "ooJBBBCCJKLMIAAKLMIDDooNEEFFoNGGGHHN" },
  { moves: 39, board: "oBBBCCooJDDLAAJoKLIEEoKMIFFooMGGHHHM" },
  { moves: 39, board: "GHBBCCGHDDKoGAAJKLEEEJKLooIFFLooIooo" },
  { moves: 39, board: "BBCCCLDDoJoLAAoJoLHIEEFFHIooKoHGGoKo" },
  { moves: 39, board: "oGBBCCoGoIJoAAoIJKFDDDJKFoHEEoFoHooo" },
  { moves: 39, board: "BBGoooFoGCCoFoAAIoDDoHIoEEEHJooooHJo" },
  { moves: 39, board: "oBBCCoooIJooAAIJooDDIKEEHFFKoLHGGGoL" },
  { moves: 39, board: "BBICCoDDIoKoHAAoKoHEEEKoHooJFFGGoJoo" },
  { moves: 39, board: "GoBBCCGDDDoJAAHIoJooHIEEoFFFoKoooooK" },
  { moves: 39, board: "ooJBBBCCJKLMIAAKLMIDDooNEEFFoNGGHHHN" },
  { moves: 39, board: "EoBBBoEooGIJAAoGIJCCCHIJooFHDDooFooo" },
  { moves: 39, board: "ooKBBBCCKLooJAALoMJDDEEMFFGGoMHHHIIo" },
  { moves: 39, board: "BBBooKooICCKAAIooLHoIDDLHEEEJoFFGGJo" },
  { moves: 39, board: "GBBoKoGoHoKLGoHAALCCCJoLooIJDDEEIFFo" },
  { moves: 39, board: "oGBBCCoGoIJoAAoIJKFDDDJKFoHoooFoHEEo" },
  { moves: 39, board: "GBBBoLGoHIKLAAHIKMoCCJoMoooJDDEEFFFo" },
  { moves: 39, board: "GBBKooGIJKCCHIJAALHDDDoLEEoooMFFFooM" },
  { moves: 39, board: "BBFooJEoFCCJEoAAHKoooGHKDDDGIooooGIo" },
  { moves: 39, board: "GBBBKMGCCCKMAAHILNDDHILNoooJEEoooJFF" },
  { moves: 39, board: "BBHCCoGoHoJKGAAoJKGDDDJKoooIEEFFoIoo" },
  { moves: 39, board: "HBBCCCHoJKDDAAJKoooIJEELoIoooLoFFGGL" },
  { moves: 39, board: "oooHIoBBBHIKAAoHJKFoCCJLFoGDDLEEGooo" },
  { moves: 39, board: "BBBJooHCCJoLHAAKoLDDIKoMooIEEMoFFGGo" },
  { moves: 39, board: "BBBJLMCCoJLMAAoKooHDDKEEHoIFFNGGIooN" },
  { moves: 39, board: "BBHCCoGoHoJoGAAoJKGDDDJKoooIEEFFoIoo" },
  { moves: 39, board: "oooKBBHIoKLMHIAALMHCCDDMooJEEoFFJGGo" },
  { moves: 39, board: "GoBBKMGCCCKMAAHILNDDHILNoooJEEoooJFF" },
  { moves: 39, board: "IBBKCCIDDKoMAAJLoMooJLEEooJFFooGGHHo" },
  { moves: 39, board: "HBBBoLHCCJoLAAIJoLDDIKoooooKEEoFFGGo" },
  { moves: 39, board: "oBBBKMCCoIKMAAoILMGDDJLoGoHJEEFFHooo" },
  { moves: 39, board: "BBCCKLDDooKLHoAAoMHEEEoMHoIJFFGGIJoo" },
  { moves: 39, board: "oBBBKMCCoIKMAAoILoGDDJLoGoHJEEFFHooo" },
  { moves: 40, board: "BBCCCLGoHooLGoHAALDDEEKoooIJKoooIJFF" },
  { moves: 40, board: "oGBBCCoGoIJoAAoIJKFDDDJKFoHEEKFoHooo" },
  { moves: 40, board: "HBBLooHoJLCCIoJAAMIoKDDMooKEENFFGGoN" },
  { moves: 40, board: "ooIBBoCCIJLoHAAJLoHDDEEoFFFKooGGGKoo" },
  { moves: 40, board: "oHBBCCoHoJDDAAoJKoGEEEKoGoIoKoGoIFFo" },
  { moves: 40, board: "FoooooFBBBJoAAGHJoCCGHJooooIDDoEEIoo" },
  { moves: 40, board: "ooFBBJooFGoJAAFGIJECCCIoEDDHoooooHoo" },
  { moves: 40, board: "ooIBBoCCIJLoHAAJLoHDDEEoFFFKooGGoKoo" },
  { moves: 40, board: "oGBBCCoGoIJoAAoIJoFDDDJKFoHooKFoHEEK" },
  { moves: 40, board: "FoooooFBBBoJAAGHoJCCGHoJoooIDDoEEIoo" },
  { moves: 40, board: "BBHoCCooHDDKAAIooKGoIEELGFFJoLGooJoo" },
  { moves: 40, board: "BBBooJooGooJooGAAJCCHIoooFHIDDoFEEEo" },
  { moves: 40, board: "BBHoooFoHCCCFAAIJKDDoIJKGooIoLGEEEoL" },
  { moves: 40, board: "oGBBBKoGoooKoAAIJLCCHIJLFoHDDLFoHEEE" },
  { moves: 40, board: "HIBBCCHIDDLoHAAKLMEEEKLMooJFFoooJGGo" },
  { moves: 40, board: "FoHBBBFoHIooFAAIoKoGoIJKoGCCJLDDDEEL" },
  { moves: 40, board: "oHIoBBoHIooLAAIooLGCCDDLGEEJKoFFFJKo" },
  { moves: 40, board: "ooGBBBooGoooAAHIJKCCHIJKoFDDoKoFEEEo" },
  { moves: 40, board: "HBBCCCHDDKoMAAJKoMEEJFFMoIooLooIGGLo" },
  { moves: 40, board: "BBHoooGoHCCoGoAAJoDDoIJoEEEIKoFFoIKo" },
  { moves: 40, board: "FoBBBoFooHJoAAoHJKCCCIJKooGIDDEEGooo" },
  { moves: 40, board: "BBoKooHooKCCHIAALMHIDDLMEEJoLNFFJGGN" },
  { moves: 40, board: "BBBKCCoooKDDAAJKoMIoJEEMIoFFLNGGHHLN" },
  { moves: 40, board: "FooBBBFooHoKAAoHJKCCCIJKooGIDDEEGooo" },
  { moves: 40, board: "HBBBoMHCCJoMAAIJLMDDIKLooooKEEFFGGoo" },
  { moves: 41, board: "BBHCCoGoHoJoGAAoJoGDDDJooooIooEEoIFF" },
  { moves: 41, board: "ooGBBBooGooJAAHoIJCCHoIKoFDDoKoFEEEK" },
  { moves: 41, board: "BBBJooooIJCCAAIooKHoIDDKHEEEoLFFGGGL" },
  { moves: 41, board: "ooGBBBooGooJAAHIoJCCHIoKFDDooKFEEEoK" },
  { moves: 41, board: "ooGBBBooGooJAAHoIJCCHoIKFDDooKFEEEoK" },
  { moves: 41, board: "GIBBLMGICCLMHAAKoNHoJKoNHoJDDDEEEFFo" },
  { moves: 41, board: "GIBBLMGICCLMHAAKoNHoJKoNHoJDDDEEFFFo" },
  { moves: 41, board: "ooIBBBooIJCCAAIJoLHoDDKLHEEEKMFFGGGM" },
  { moves: 41, board: "oBBBCCooJDDMAAJKLMIEEKLNIFFooNGGHHHN" },
  { moves: 41, board: "ooGBBJooGHoJAAGHoJFCCCooFDDIooEEoIoo" },
  { moves: 41, board: "GooBBBGooIoKAAoIoKCCCJoKooHJDDEEHFFo" },
  { moves: 41, board: "HIBBCCHIDDLoHAAKLMEEEKLMooJFFMooJGGo" },
  { moves: 41, board: "BBCCCoIooKDDIAAKoLooJEELFFJooMGGJHHM" },
  { moves: 41, board: "oBBBCCDDEEEMooKAAMFFKLoMJooLGGJHHIIo" },
  { moves: 41, board: "oHBBCCoHoJKoAAoJKLGDDDKLGoIEEoGoIFFo" },
  { moves: 41, board: "GoBBCCGDDDoKAAHIoKooHIEEoFFFJLooooJL" },
  { moves: 41, board: "BBHoooGoHCCoGoAAJoDDoIJoEEEIKoFFFIKo" },
  { moves: 41, board: "BBICCoDDIoKLHAAoKLHEEEKLHooJFFGGoJoo" },
  { moves: 41, board: "GBBBoKGoHCCKAAHIoLoDDIoLoooJEEFFFJoo" },
  { moves: 41, board: "BBICCoDDIoKoHAAoKLHEEEKLHooJFFGGoJoo" },
  { moves: 41, board: "BBGooKFoGCCKFoAAIoDDoHIoEEEHJooooHJo" },
  { moves: 41, board: "HoBBCCHDDDoKAAIJoKooIJEEoFFFoLooGGoL" },
  { moves: 41, board: "BBoIoLEGoIKLEGAAKMFCCJKMFoHJooFoHDDo" },
  { moves: 41, board: "GooJBBGooJCCHAAJooHoIDDKEEIooKFFFooK" },
  { moves: 41, board: "BBBCCLDDDJoLAAIJoMooIEEMHoFFKoHGGGKo" },
  { moves: 41, board: "oGBBKLoGHIKLAAHIoLooHJCCFDDJooFEEEoo" },
  { moves: 41, board: "BBBIJoCCCIJLAAoIKLGoDDKMGoHEEMFFHooo" },
  { moves: 41, board: "BBBJooHCCJoMHAAKLMDDIKLNooIEENoFFGGo" },
  { moves: 41, board: "BBoIJoCCCIJLAAoIKLGoDDKMGoHEEMFFHooo" },
  { moves: 41, board: "oBBBKMCCoIKMAAoILNGDDJLNGoHJEEFFHooo" },
  { moves: 42, board: "BBICCoHoIoKoHAAoKoHDDDKooooJEEFFoJGG" },
  { moves: 42, board: "ooHBBBooHooKAAIoJKCCIoJLFGDDoLFGEEEL" },
  { moves: 42, board: "BBJLCCDDJLoMAAKooMIoKoEEIFFooNIGGHHN" },
  { moves: 42, board: "oHBBCCoHoJKoAAoJKLGDDDKLGoIEELGoIFFo" },
  { moves: 42, board: "GBBBCCGHoooKGHAAoKDDDJoKooIJEEFFIooo" },
  { moves: 42, board: "BBCCCLIooDDLIooAAMEEFFKMGGJoKMooJHHH" },
  { moves: 42, board: "GBBICCGoHIoKAAHooKooHDDKoooJEEFFFJoo" },
  { moves: 42, board: "FGBBJoFGoIJLFAAIKLooHoKMooHCCMDDEEEM" },
  { moves: 42, board: "FGBBJoFGoIJLFAAIKLooHoKMooHCCMDDDEEM" },
  { moves: 42, board: "BBBJooooIJCCAAIooLHoIDDLHEEEKMFFGGKM" },
  { moves: 42, board: "FoooooFBBBJKAAGHJKCCGHJKoooIDDoEEIoo" },
  { moves: 42, board: "BBGooKFoGCCKFoAAIKDDoHIoEEEHJooooHJo" },
  { moves: 42, board: "HoBBCCHDDDoKAAIJoKooIJEEoFFFoLoGGGoL" },
  { moves: 42, board: "GoBBooGCCCKoAAHIKoDDHIKooooJEEoFFJoo" },
  { moves: 42, board: "FoooooFBBBJoAAGHJKCCGHJKoooIDDoEEIoo" },
  { moves: 42, board: "FoBBBoFooHJKAAoHJKCCCIJKooGIDDEEGooo" },
  { moves: 42, board: "HoBBBoHCCJLoAAIJLoDDIKLooooKEEoFFGGo" },
  { moves: 42, board: "FoooooFBBBoKAAGHJKCCGHJKoooIDDoEEIoo" },
  { moves: 42, board: "GBBBoLGoHCCLAAHIKMoDDIKMoooJEEFFFJoo" },
  { moves: 42, board: "GoBBooGCCCoKAAHIoKDDHIoKoooJEEoFFJoo" },
  { moves: 42, board: "BBBooKooHooKooHAAKCCIJooFGIJDDFGEEEo" },
  { moves: 42, board: "ooHBBBooHoooAAIJKLCCIJKLFGDDoLFGEEEo" },
  { moves: 42, board: "FBBoKoFGHoKLFGHAALCCCJoLooIJDDEEIooo" },
  { moves: 42, board: "HoBBCCHoDDoKAAIooKooIEELFFIJoLGGGJoo" },
  { moves: 42, board: "BBHooLGoHCCLGoAAJoDDoIJoEEEIKoFFoIKo" },
  { moves: 43, board: "BBHCCCooHooJAAHooJGDDEEJGFFIoooooIoo" },
  { moves: 43, board: "BBICCoDDIoKoHAAoKoHEEEKoHooJooFFoJGG" },
  { moves: 43, board: "ooHBBKooHIoKAAHIoKGCCCooGDDJooEEoJFF" },
  { moves: 43, board: "BBCCCMDDKooMIoKAAMIooLEEJooLFFJGGHHH" },
  { moves: 43, board: "ooGBBBooGooKAAHIJKCCHIJLFDDooLFEEEoL" },
  { moves: 43, board: "BBHCCoGoHoJoGAAoJKGDDDJKoooIooEEoIFF" },
  { moves: 43, board: "GBBBooGCCCKoAAHIKoDDHIKooooJEEoFFJoo" },
  { moves: 43, board: "oHBBCCoHoJDDAAoJKoGEEEKLGoIoKLGoIFFL" },
  { moves: 43, board: "GooBBBGooIoLAAoIKLCCCJKLooHJDDEEHFFo" },
  { moves: 43, board: "ooGBBKooGHoKAAGHJKFCCCJoFDDIooEEoIoo" },
  { moves: 43, board: "GBBBooGCCCoKAAHIoKDDHIoKoooJEEoFFJoo" },
  { moves: 43, board: "oHBBCCoHoJDDAAoJKoGEEEKoGoIoKLGoIFFL" },
  { moves: 43, board: "BBIoCCooIDDLAAJooLHoJEEMHFFKoMHGGKoo" },
  { moves: 43, board: "HoBBCCHDDDoLAAIJoLooIJEEoFFFKMooGGKM" },
  { moves: 43, board: "BBHooLGoHCCLGoAAJoDDoIJoEEEIKoFFFIKo" },
  { moves: 43, board: "HoBBBMHCCJLMAAIJLoDDIKLooooKEEoFFGGo" },
  { moves: 44, board: "BBBCCLHooooLHAAooLHIDDEEoIJKFFGGJKoo" },
  { moves: 44, board: "BBJCCoDDJoLoIAAoLoIEEELoIooKFFGGoKHH" },
  { moves: 44, board: "BBHCCoGoHoJKGAAoJKGDDDJKoooIooEEoIFF" },
  { moves: 44, board: "BBICCoHoIoKoHAAoKLHDDDKLoooJEEFFoJGG" },
  { moves: 44, board: "HBBBCCHIDDoLHIAAoLEEEKoLooJKFFGGJooo" },
  { moves: 44, board: "IBBCCCIoDDLMAAJoLMEEJFFMoGGKooHHHKoo" },
  { moves: 44, board: "BBGooKFoGCCKFoAAILDDoHILEEEHJooooHJo" },
  { moves: 44, board: "HoBBCCHDDDoLAAIJoLooIJEEoFFFKMoGGGKM" },
  { moves: 44, board: "BBHooLGoHCCLGoAAJLDDoIJoEEEIKoFFFIKo" },
  { moves: 44, board: "GoBBooGCCCKLAAHIKLDDHIKLoooJEEoFFJoo" },
  { moves: 44, board: "HoBBBMHCCJLMAAIJLMDDIKLooooKEEoFFGGo" },
  { moves: 44, board: "BBHooLGoHCCLGoAAJLDDoIJoEEEIKoFFoIKo" },
  { moves: 44, board: "GoBBooGCCCKoAAHIKLDDHIKLoooJEEoFFJoo" },
  { moves: 44, board: "GBBoLMGHIoLMGHIAANCCJKoNooJKDDoEEFFo" },
  { moves: 44, board: "GoBBooGCCCoLAAHIKLDDHIKLoooJEEoFFJoo" },
  { moves: 45, board: "FBBIJKFoGIJKAAGIoLCCDDoLooHoooooHEEE" },
  { moves: 45, board: "ooHBBLooHIoLAAHIKLGCCCKoGDDJooEEoJFF" },
  { moves: 45, board: "BBICCoHoIoKLHAAoKLHDDDKLoooJEEFFoJGG" },
  { moves: 45, board: "BBICCoDDIoKoHAAoKLHEEEKLHooJooFFoJGG" },
  { moves: 45, board: "GBBBooGCCCKLAAHIKLDDHIKLoooJEEoFFJoo" },
  { moves: 45, board: "GBBBooGCCCKoAAHIKLDDHIKLoooJEEoFFJoo" },
  { moves: 45, board: "GBBBooGCCCoLAAHIKLDDHIKLoooJEEoFFJoo" },
  { moves: 45, board: "BBHooLGoHCCLGoAAJMDDoIJMEEEIKoFFoIKo" },
  { moves: 46, board: "EGBBKLEGHoKLFoHAAMFCCJoMFoIJoMooIDDD" },
  { moves: 46, board: "BBBCCMDDoooMIAAooMIJEEFFIJKLGGHHKLoo" },
  { moves: 46, board: "BBICCCooIooKAAIooKHDDEEKHFFJooGGoJoo" },
  { moves: 46, board: "BBICCoDDIoKLHAAoKLHEEEKLHooJooFFoJGG" },
  { moves: 46, board: "BBJCCoDDJoLoIAAoLMIEEELMIooKFFGGoKHH" },
  { moves: 46, board: "BBCCLMooJoLMIoJAAMIDDKEEoFFKooGGHHHo" },
  { moves: 46, board: "HoBBBMHCCJLMAAIJLNDDIKLNoooKEEoFFGGo" },
  { moves: 46, board: "BBHooLGoHCCLGoAAJMDDoIJMEEEIKoFFFIKo" },
  { moves: 46, board: "BBBKLoHCCKLoHoAALoDDJooooIJEEooIFFGG" },
  { moves: 47, board: "ooGBBBooGIooAAHIoJCCHDDJoFEEoJoFoooo" },
  { moves: 47, board: "oooIBBoCCIKoAAHJKoDDHJEEGFFFoLGooooL" },
  { moves: 47, board: "BBJCCoDDJoLMIAAoLMIEEELMIooKFFGGoKHH" },
  { moves: 47, board: "BBCCLoooJoLMIoJAAMIDDEEMoFFKooGGGKHH" },
  { moves: 48, board: "ooHBBBooHJooAAIJoKCCIDDKFGEEoKFGoooo" },
  { moves: 48, board: "GooBBBGCCJoKAAHJoKooHDDKooIEEoooIFFF" },
  { moves: 48, board: "BBBKLMHCCKLMHoAALoDDJooooIJEEooIFFGG" },
  { moves: 49, board: "ooHBBBooHJooAAIJoKCCIDDKoGEEoKoGFFoo" },
  { moves: 49, board: "oooJBBoCCJLoAAIKLoDDIKEEHFFFoMHGGGoM" },
  { moves: 49, board: "oooJBBoCCJLoAAIKLoDDIKEEHFFFoMHoGGoM" },
  { moves: 49, board: "BBBKLMHCCKLMHoAALMDDJooooIJEEooIFFGG" },
  { moves: 50, board: "ooIBBBooIKooAAJKoLCCJDDLGHEEoLGHFFoo" },
  { moves: 51, board: "GBBoLoGHIoLMGHIAAMCCCKoMooJKDDEEJFFo" },
];

const LEVELS = RAW_LEVELS_DESC.slice().map((l, i) => ({
  ...l,
  stage: i + 1,
  source: "https://www.michaelfogleman.com/static/rush/rush1000.txt",
}));

const SIZE = 6;
const CELL = 100 / SIZE;

const boardEl = document.getElementById("board");
const stageLabel = document.getElementById("stageLabel");
const moveCountEl = document.getElementById("moveCount");
const clearCountEl = document.getElementById("clearCount");
const audioToggleBtn = document.getElementById("audioToggle");
const musicLevelEl = document.getElementById("musicLevel");
const fxLevelEl = document.getElementById("fxLevel");

const storageKey = "pyramid_escape_progress_v1";
const state = {
  stageIndex: 0,
  grid: [],
  pieces: {},
  selected: null,
  moves: 0,
  cleared: new Set(JSON.parse(localStorage.getItem(storageKey) || "[]")),
};

const drag = {
  active: false,
  pointerId: null,
  pieceId: null,
  anchorX: 0,
  anchorY: 0,
};

const audio = {
  ctx: null,
  started: false,
  muted: false,
  step: 0,
  loopTimer: null,
  masterGain: null,
  musicGain: null,
  fxGain: null,
  musicLevel: Number(musicLevelEl?.value || 45) / 100,
  fxLevel: Number(fxLevelEl?.value || 70) / 100,
};

function idx(r, c) {
  return r * SIZE + c;
}

function rc(index) {
  return [Math.floor(index / SIZE), index % SIZE];
}

function updateAudioGains() {
  if (!audio.masterGain || !audio.musicGain || !audio.fxGain) return;
  const on = audio.muted ? 0 : 1;
  audio.masterGain.gain.value = on;
  audio.musicGain.gain.value = audio.musicLevel;
  audio.fxGain.gain.value = audio.fxLevel;
}

function updateAudioButton() {
  if (!audioToggleBtn) return;
  audioToggleBtn.textContent = audio.muted ? "사운드 켜기" : "사운드 끄기";
}

function ensureAudioStarted() {
  if (audio.started) return;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  audio.ctx = new AudioCtx();
  audio.masterGain = audio.ctx.createGain();
  audio.musicGain = audio.ctx.createGain();
  audio.fxGain = audio.ctx.createGain();
  audio.musicGain.connect(audio.masterGain);
  audio.fxGain.connect(audio.masterGain);
  audio.masterGain.connect(audio.ctx.destination);
  updateAudioGains();

  const notes = [196.0, 246.94, 293.66, 246.94, 174.61, 220.0, 261.63, 220.0];
  const playBeat = () => {
    if (!audio.ctx || audio.muted) return;
    const note = notes[audio.step % notes.length];
    audio.step += 1;
    playTone(note, 0.26, "triangle", 0.18, audio.musicGain);
  };
  playBeat();
  audio.loopTimer = window.setInterval(playBeat, 340);
  audio.started = true;
}

function playTone(freq, durationSec, type, gainValue, bus) {
  if (!audio.ctx || audio.muted) return;
  const osc = audio.ctx.createOscillator();
  const gain = audio.ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = Math.max(0.001, gainValue);
  osc.connect(gain);
  gain.connect(bus || audio.fxGain);

  const now = audio.ctx.currentTime;
  gain.gain.setValueAtTime(gain.gain.value, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);
  osc.start(now);
  osc.stop(now + durationSec);
}

function playMoveSfx() {
  playTone(370, 0.055, "square", 0.12);
}

function playClearSfx() {
  const seq = [392, 493.88, 587.33];
  seq.forEach((f, i) => {
    window.setTimeout(() => playTone(f, 0.14, "triangle", 0.2), i * 100);
  });
}

function parseStage(layout) {
  const chars = layout.split("");
  const pieceCells = {};
  const grid = chars.map((ch, i) => {
    if (/[A-Z]/.test(ch)) {
      if (!pieceCells[ch]) pieceCells[ch] = [];
      pieceCells[ch].push(i);
    }
    return ch;
  });

  const pieces = {};
  Object.entries(pieceCells).forEach(([id, cells]) => {
    const coords = cells.map(rc);
    const sameRow = coords.every(([r]) => r === coords[0][0]);
    const orientation = sameRow ? "h" : "v";
    pieces[id] = {
      id,
      cells,
      len: cells.length,
      orientation,
    };
  });

  return { grid, pieces };
}

function colorFor(id) {
  if (id === "A") return "#d33d2f";
  const hue = (id.charCodeAt(0) * 23) % 360;
  return `hsl(${hue} 62% 58%)`;
}

function rebuildPieces() {
  const pieceCells = {};
  state.grid.forEach((ch, i) => {
    if (/[A-Z]/.test(ch)) {
      if (!pieceCells[ch]) pieceCells[ch] = [];
      pieceCells[ch].push(i);
    }
  });

  const pieces = {};
  Object.entries(pieceCells).forEach(([id, cells]) => {
    const coords = cells.map(rc);
    const sameRow = coords.every(([r]) => r === coords[0][0]);
    pieces[id] = { id, cells, len: cells.length, orientation: sameRow ? "h" : "v" };
  });
  state.pieces = pieces;
}

function drawGrid() {
  const frag = document.createDocumentFragment();
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const i = idx(r, c);
      const cell = document.createElement("div");
      const ch = state.grid[i];
      cell.className = "cell" + (ch === "x" ? " wall" : "");
      cell.style.left = `${c * CELL}%`;
      cell.style.top = `${r * CELL}%`;
      cell.style.width = `${CELL}%`;
      cell.style.height = `${CELL}%`;
      frag.appendChild(cell);
    }
  }
  boardEl.appendChild(frag);
}

function drawExitGate() {
  const a = state.pieces.A;
  if (!a || a.orientation !== "h") return;
  const [row] = rc(a.cells[0]);
  const gate = document.createElement("div");
  gate.className = "exit-gate";
  gate.style.top = `${row * CELL + CELL * 0.12}%`;
  gate.style.height = `${CELL * 0.76}%`;
  boardEl.appendChild(gate);
}

function drawPieces() {
  Object.values(state.pieces).forEach((piece) => {
    const coords = piece.cells.map(rc);
    const rows = coords.map(([r]) => r);
    const cols = coords.map(([, c]) => c);
    const minR = Math.min(...rows);
    const maxR = Math.max(...rows);
    const minC = Math.min(...cols);
    const maxC = Math.max(...cols);

    const el = document.createElement("button");
    el.className = `piece${piece.id === state.selected ? " selected" : ""}${piece.id === "A" ? " goal" : ""}`;
    el.type = "button";
    el.style.left = `${minC * CELL}%`;
    el.style.top = `${minR * CELL}%`;
    el.style.width = `${(maxC - minC + 1) * CELL}%`;
    el.style.height = `${(maxR - minR + 1) * CELL}%`;
    if (piece.id === "A") {
      el.classList.add("goal-photo");
      el.style.backgroundColor = "#d33d2f";
    } else {
      el.style.background = colorFor(piece.id);
    }
    el.textContent = "";
    el.setAttribute("aria-label", `블록 ${piece.id}`);
    el.addEventListener("click", () => {
      state.selected = piece.id;
      render();
    });
    el.addEventListener("pointerdown", (e) => beginPieceDrag(e, piece.id));
    boardEl.appendChild(el);
  });
}

function render() {
  boardEl.innerHTML = "";
  drawGrid();
  drawExitGate();
  drawPieces();
  stageLabel.textContent = `${state.stageIndex + 1} / ${LEVELS.length} (기준 ${LEVELS[state.stageIndex].moves} moves)`;
  moveCountEl.textContent = String(state.moves);
  clearCountEl.textContent = `${state.cleared.size} / ${LEVELS.length}`;
}

function canOccupy(pieceId, targetIndex) {
  if (targetIndex < 0 || targetIndex >= SIZE * SIZE) return false;
  return state.grid[targetIndex] === "o";
}

function isCleared() {
  const a = state.pieces.A;
  if (!a || a.orientation !== "h") return false;
  return a.cells.some((cell) => rc(cell)[1] === SIZE - 1);
}

function tryMove(dir) {
  const id = state.selected;
  if (!id || !state.pieces[id]) return false;

  const piece = state.pieces[id];
  if (piece.orientation === "h" && (dir === "up" || dir === "down")) return false;
  if (piece.orientation === "v" && (dir === "left" || dir === "right")) return false;

  let step = 0;
  if (dir === "left") step = -1;
  if (dir === "right") step = 1;
  if (dir === "up") step = -SIZE;
  if (dir === "down") step = SIZE;

  const ordered = piece.cells.slice().sort((a, b) => (step > 0 ? b - a : a - b));

  for (const from of ordered) {
    const to = from + step;
    const [fr, fc] = rc(from);
    const [tr, tc] = rc(to);

    if (Math.abs(fr - tr) + Math.abs(fc - tc) !== 1) return false;
    if (!piece.cells.includes(to) && !canOccupy(id, to)) return false;
  }

  piece.cells.forEach((cell) => {
    state.grid[cell] = "o";
  });

  const newCells = piece.cells.map((c) => c + step);
  newCells.forEach((cell) => {
    state.grid[cell] = id;
  });

  state.moves += 1;
  playMoveSfx();
  rebuildPieces();
  state.selected = id;

  if (isCleared()) {
    playClearSfx();
    state.cleared.add(state.stageIndex + 1);
    localStorage.setItem(storageKey, JSON.stringify([...state.cleared].sort((a, b) => a - b)));
    render();
    setTimeout(() => {
      const current = state.stageIndex + 1;
      const msg = current < LEVELS.length
        ? `스테이지 ${current} 클리어! 다음 스테이지로 이동합니다.`
        : `스테이지 ${current} 클리어! ${LEVELS.length}단계 완료.`;
      alert(msg);
      if (state.stageIndex + 1 < LEVELS.length) {
        state.stageIndex += 1;
        loadStage(state.stageIndex);
      }
    }, 30);
    return true;
  }

  render();
  return true;
}

function beginPieceDrag(e, pieceId) {
  if (!state.pieces[pieceId]) return;
  state.selected = pieceId;
  drag.active = true;
  drag.pointerId = e.pointerId;
  drag.pieceId = pieceId;
  drag.anchorX = e.clientX;
  drag.anchorY = e.clientY;
  if (e.currentTarget?.setPointerCapture) {
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  e.preventDefault();
}

function endPieceDrag(e) {
  if (!drag.active) return;
  if (e && drag.pointerId !== null && e.pointerId !== drag.pointerId) return;
  drag.active = false;
  drag.pointerId = null;
  drag.pieceId = null;
}

function handlePieceDragMove(e) {
  if (!drag.active || e.pointerId !== drag.pointerId) return;
  const piece = state.pieces[drag.pieceId];
  if (!piece) {
    endPieceDrag(e);
    return;
  }

  const cellPx = boardEl.clientWidth / SIZE;
  if (!cellPx) return;

  if (piece.orientation === "h") {
    let dx = e.clientX - drag.anchorX;
    while (Math.abs(dx) >= cellPx) {
      const dir = dx > 0 ? "right" : "left";
      const moved = tryMove(dir);
      if (!moved) break;
      drag.anchorX += (dx > 0 ? 1 : -1) * cellPx;
      dx = e.clientX - drag.anchorX;
    }
  } else {
    let dy = e.clientY - drag.anchorY;
    while (Math.abs(dy) >= cellPx) {
      const dir = dy > 0 ? "down" : "up";
      const moved = tryMove(dir);
      if (!moved) break;
      drag.anchorY += (dy > 0 ? 1 : -1) * cellPx;
      dy = e.clientY - drag.anchorY;
    }
  }

  e.preventDefault();
}

function loadStage(index) {
  state.stageIndex = Math.max(0, Math.min(LEVELS.length - 1, index));
  const parsed = parseStage(LEVELS[state.stageIndex].board);
  state.grid = parsed.grid;
  state.pieces = parsed.pieces;
  state.moves = 0;
  state.selected = "A";
  render();
}

function bindEvents() {
  window.addEventListener("keydown", (e) => {
    const map = {
      ArrowLeft: "left",
      ArrowRight: "right",
      ArrowUp: "up",
      ArrowDown: "down",
    };
    if (!map[e.key]) return;
    e.preventDefault();
    tryMove(map[e.key]);
  });

  window.addEventListener("pointermove", handlePieceDragMove);
  window.addEventListener("pointerup", endPieceDrag);
  window.addEventListener("pointercancel", endPieceDrag);

  const activateAudio = () => {
    ensureAudioStarted();
    if (audio.ctx && audio.ctx.state === "suspended") {
      audio.ctx.resume();
    }
  };
  window.addEventListener("pointerdown", activateAudio, { once: true });
  window.addEventListener("keydown", activateAudio, { once: true });

  if (audioToggleBtn) {
    updateAudioButton();
    audioToggleBtn.addEventListener("click", () => {
      activateAudio();
      audio.muted = !audio.muted;
      updateAudioGains();
      updateAudioButton();
    });
  }

  if (musicLevelEl) {
    musicLevelEl.addEventListener("input", () => {
      audio.musicLevel = Number(musicLevelEl.value) / 100;
      updateAudioGains();
    });
  }

  if (fxLevelEl) {
    fxLevelEl.addEventListener("input", () => {
      audio.fxLevel = Number(fxLevelEl.value) / 100;
      updateAudioGains();
    });
  }
}

bindEvents();
loadStage(0);

